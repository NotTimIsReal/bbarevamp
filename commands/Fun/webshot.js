const puppeteer = require('puppeteer');
const Discord=require('discord.js');
const fs = require('fs');
module.exports = {
    name: "screenie",
    description: "Take a screenshot of a website",
    category: "Fun",
    memberpermissions:"VIEW_CHANNEL",
    adminPermOverride: true,
    cooldown: 5,
    usage: "screenie <link-needs to start with https:// or http://>",
    run:async(client, message, args)=>{
        function isValidHttpUrl(string) {
            
            try {
              let url = new URL(string);
            } catch (_) {
              return false;  
            }
            return true
          
        }
        if(!isValidHttpUrl(args[0]))return message.channel.send('The link you sent does not start with https or http')
        if(message.content.includes('porn')||message.content.includes('xxx')||message.content.includes('nude'))return message.channel.send('The link you have provided is explicit or in our banned websites list')
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(args[0]);
        await page.screenshot({ path: './images/example.png' })
        await browser.close();
        let p= new Discord.MessageAttachment('./images/example.png', 'picture.png')
        let embed=new Discord.MessageEmbed()
        .setTitle(`Result For ${args[0]}`)
        .setImage(p)
        .setColor('GREEN')
        message.channel.send({embeds:[embeds]})
        setTimeout(function(){fs.unlink('./images/example.png', (err)=>{if(err)return console.log(err)})}, 1000)
        
}
}