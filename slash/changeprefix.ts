const prefixSchema = require("../Schemas/prefixSchema");
const { newCache } = require("../Utils/prefix-load");
const { MessageMentions } = require("discord.js");
module.exports = {
  name: "changeprefix",
  description: "Changes The Prefix",
  options: [
    { type: 3, name: "prefix", description: "the prefix", required: true },
  ],
  run: async (client, interaction) => {
    const prefix = interaction.options.getString("prefix");
    if (
      MessageMentions.USERS_PATTERN.test(prefix) ||
      MessageMentions.ROLES_PATTERN.test(prefix) ||
      MessageMentions.CHANNELS_PATTERN.test(prefix)
    ) {
      return interaction.reply("Mentions are not allowed to be prefixes");
    }
    if (interaction.member.permissions.has("MANAGE_GUILD")) {
      if (prefix === "b!") {
        await prefixSchema.deleteOne({ _id: interaction.guild.id });
        newCache();
        return interaction.reply("Changed The Prefix To Default");
      } else
        await prefixSchema.findOneAndUpdate(
          { _id: interaction.guild.id },
          {
            _id: interaction.guild.id,
            prefix,
          },
          { upsert: true }
        );
      newCache();
      return interaction.reply(`Changed The Prefix To ${prefix}`);
    } else
      return interaction.reply({
        content: "Invalid Perms, Perms Expected:`MANAGE_GUILD`",
        ephemeral: true,
      });
  },
};