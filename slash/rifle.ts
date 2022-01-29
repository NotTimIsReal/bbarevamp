'use strict';

const {MessageEmbed}=require('discord.js')
module.exports = {
    name: "rifle",
    description: "rifle",
    options:[{name:'user', description:'user', type:6}],
    run:async(client, interaction)=>{
        let user=interaction.options.getUser('user')
        const embed=new MessageEmbed()
        .setTitle('Rifle')
        .setColor('GREEN')
        if(!user){
            let img=interaction.member.user.displayAvatarURL()
            img=img.replace('.webp', '.png')
            embed.setImage(`https://api.weky.xyz/canvas/rifleshoot?image=${img}`)
            interaction.reply({embeds:[embed]})
            return
        }else{
            let img=user.displayAvatarURL()
            img=img.replace('.webp', '.png')
            embed.setImage(`https://api.weky.xyz/canvas/rifleshoot?image=${img}`)
            interaction.reply({embeds:[embed]})
        }
        
    },
};
//https://api.weky.xyz/canvas/whodidthis?image=${img}