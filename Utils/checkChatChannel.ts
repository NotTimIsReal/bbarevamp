import axios from "axios"
import chatBot from '../Schemas/chatbot'
async function check(message){
    let check=await chatBot.findOne({guildID:message.guild.id})
    if(check){
      let ch=check.channelID
      if(message.channel.id===ch){
          async function urlGet(url){
              let axios=require('axios').default
              axios.get(url)
            .then(function (response) {
              // handle success
              let c=message.guild.channels.cache.get(ch)
              c.send(response.data.message)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
            });
              
          }
          urlGet(`https://api.udit.tk/api/chatbot?message=${message.content}`)
          return
          
      }}
    }
export default check