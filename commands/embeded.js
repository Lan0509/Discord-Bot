const { Client,Collection, MessageEmbed, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
module.exports = {
  name: "m!em",
  description : "custom bot message",
  execute(messages){
    const embed = new MessageEmbed()
                  .setTitle("Custom Message");
    messages.channel.send({embeds: [embed]});
    
    
  }  
}