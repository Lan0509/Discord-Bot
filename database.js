const start = async function(){
  const Client = require("@replit/database");
  const client = new Client();
  client.set("key", "value");
  let key = await client.get("key");
  console.log(key);
}

start();