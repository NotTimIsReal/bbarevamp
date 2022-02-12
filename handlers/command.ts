"use strict";

import { Client } from "discord.js";

const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Commands");
let otherTable = new ascii("Slash");
table.setHeading("Command", "Load status");
otherTable.setHeading("Slash", "Load Status");
console.log(
  "Welcome to SERVICE HANDLER /--/ By https://milrato.eu /--/ Discord: Tomato#6966"
    .yellow
);
module.exports = (client: Client) => {
  try {
    readdirSync("./commands/").forEach((dir: string) => {
      const commands = readdirSync(`./commands/${dir}/`).filter(
        (file: string) => file.endsWith(".js")
      );
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`);
        if (pull.name) {
          client.commands.set(pull.name, pull);
          table.addRow(file, "Ready");
        } else {
          table.addRow(
            file,
            `error->missing a help.name,or help.name is not a string.`
          );
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach((alias: string) =>
            client.aliases.set(alias, pull.name)
          );
      }
    });
    console.log(table.toString().cyan);
    const slash = readdirSync("./slash").filter((file: string) =>
      file.endsWith(".js")
    );
    for (let file of slash) {
      let pull = require(`../slash/${file}`);
      if (pull.name) {
        client.interactions.set(pull.name, pull);
        otherTable.addRow(file, "Ready");
      } else {
        table.addRow(file, "error->missing name");
        continue;
      }
    }
    console.log(otherTable.toString().red);
  } catch (e: any) {
    console.log(String(e.stack).bgRed);
  }
};

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
