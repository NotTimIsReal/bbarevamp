import { Collection } from "discord.js";
import { Node } from "lavaclient";

module "discord.js" {
  export interface Client {
    lavalink: Node;
    queue: Map<string, any>;
    commands: Collection<unknown, command>;
    aliases: Collection<unknown, unknown>;
    categories: string[];
    cooldowns: Collection<unknown, unknown>;
    interactions: Collection<unknown, unknown>;
    Token: string;
    prefix: { [key: string]: string };
    cache: { id: string; prefix: string }[];
  }
}
module "config.json" {
  export const mongoPath: string;
  export const prefix: string;
  export const nodes: node[];
}
type node = {
  id: string;
  host: string;
  port: string;
  password: string;
};
type command = {
  name: string;
  description: string;
  aliases: string[];
  category: string;
  cooldown: number;
  usage: string;
  run: (client: Client, interaction: CommandInteraction) => void;
};