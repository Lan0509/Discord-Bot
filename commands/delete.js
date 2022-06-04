module.exports = {
  name: "m!delete",
  description : "ping user",
  execute(messages){
    if(messages.channel.name == "debug-channel"){
      messages.channel.delete();
    }
  }  
}