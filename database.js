const Database = require("@replit/database");

const db = new Database();

async function setKey(key, value) {
  await db.set(key, value);
};

async function getKeyValue(key) {
  let value = db.get(key);
  return value;
};

async function deleteKey(key) {
  await db.delete(key);
}

async function listKeys() {
  let keys = db.list();
  return keys;
}

//Insert data into database
setKey("Hot Milo", "Warrior");
setKey("Cold Milo", "Mage");

//Delete data from the database
//deleteKey("Hot Milo");
//deleteKey("Cold Milo");
//deleteKey("key");

//Read data from the database
getKeyValue("Hot Milo").then((key) =>console.log(key));

//maybe use foreach to iterate it
//print all the data inside the database
listKeys().then((keys)=>console.log(keys));

listKeys().then(function(result){
  let dbList = result;
  return dbList;
}).then(function(result){
  for(var i = 0; i < result.length;i++){
    console.log(result[i]);
  }
});
