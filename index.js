const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//client.once('ready', ()=>{
//  console.log("Ready");
//});

client.on('message', message=>{
  console.log(message.content);
  if(message.content == "!ping"){
    message.channel.send("Hello World");
  }
  else if(message.content == "!delete"){
    message.delete(message.content);
  }
  else if(message.content == "!clear"){
    if(message.channel.name == "debug-channel"){
      message.channel.delete();
    }else{
      message.channel.send("This is not a debug-channel").then(msg=>{
        setTimeout(()=>{
          msg.delete("This is not a debug-channel",50000);
        })
      })
    }
  }
});

const mySecret = process.env['BOT_TOKEN']
client.login(mySecret);

