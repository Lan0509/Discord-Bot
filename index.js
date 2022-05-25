const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//client.once('ready', ()=>{
//  console.log("Ready");
//});

//Command: M!
client.on('message', message=>{
  //process user input
  const user_input = message.content.trim().split(" ");
  const command = user_input.shift().toLowerCase();
  if(command == "m!ping"){
    if(user_input.length != 0){
      const user = message.mentions.users.first();
    message.channel.send(user.username) 
    }else{
      message.channel.send(`Please provide a valid arguments: ${message.author}`);
    }   
       
  }
  //for developer
  if(command == "m!delete"){
    if(message.channel.name == "debug-channel"){
      message.channel.delete();
    }
  } 
});

const mySecret = process.env['BOT_TOKEN']
client.login(mySecret);

