module.exports = {
  name: "m!ping",
  description : "ping user",
  execute(messages){
    messages.channel.send("Hello World");
  }  
}