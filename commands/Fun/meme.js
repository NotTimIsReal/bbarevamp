const gottem=require('djs-meme')
const Discord=require('discord.js')
module.exports = {
    name: "meme",
    description: "sends a meme",
    category: "Fun",
    guildOnly: true,
    memberpermissions:"VIEW_CHANNEL",
    cooldown: 5,
    usage: "meme",
    run:async(client, message, args)=>{
        const Meme = await gottem.meme();
        let embed=new Discord.MessageEmbed()
        .setTitle(Meme.embed.title)
        .setURL(Meme.embed.url)
        .setImage(Meme.embed.image.url)
        .setFooter(Meme.embed.footer.text)
        .setColor(Meme.embed.color)
        .setTimestamp(Meme.embed.timestamp)
        message.channel.send({embeds:[embed]});
    },
};