'use strict';

const {DiscordTogether}=require('discord-together')
const {reply}=require('../../exports')
module.exports = {
    name: "youtube",
    description: "Play youtube with your buds",
    category: "Games",
    guildOnly: true,
    memberpermissions:"VIEW_CHANNEL",
    cooldown: 10,
    usage: "youtube",
    run:async(client, message)=>{
        client.discordTogether = new DiscordTogether(client);
        if(!message.member.voice.channel)return reply('You need to be in a VC', true, message)
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            if(invite.code =='https://discord.com/invite/50013')return message.channel.send('An error occured while creating that invite, make sure I have the permission: `CREATE-INVITE` and that this channel allows me to send invites')
            else return message.channel.send(`${invite.code}`);
    })
}}
