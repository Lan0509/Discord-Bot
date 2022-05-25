module.exports = {
  name = "m!ping",
  description = "ping user",
  execute(messages, args){
    messages.channel.send("Hello World");
  }
}