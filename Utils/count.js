const countSchema=require('../Schemas/countSchema')

async function count(message){
        let countInfo=await countSchema.findOne({_id:message.guild.id})
        if(countInfo){
          const vc=countInfo.voiceChannelID
          setInterval(function () {
            var memberCount = message.guild.members.cache.filter(m => !m.user.bot).size;  
            var memberCountChannel =  message.guild.channels.cache.get(vc);
            if(!memberCountChannel)return
            memberCountChannel.setName(`${memberCount} members!`);
         }, 1000)}}
exports.count=count

    