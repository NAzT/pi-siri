var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://mqtt.espert.io');

var connected = false;
 
client.on('connect', function () {
  console.log("mqtt connect"); 
});

client.chat = function(topic, msg) {
  console.log('topic=>', topic);
  if (topic == "door001") {
    client.publish("/CMMC/pisiri/"+topic+"/command", msg);
  }
  else {
    client.publish("/CMMC/pisiri/command", msg);
  }

}

//var MicroGear = require('microgear');
//
//const APPID  = "HelloNETPIE";
//const KEY    = "pekUCWqOlUvkgl8";
//const SECRET = "f1OP4WTLHSuQHtrppykFtbxiA";
//
//var microgear = MicroGear.create({
//    key : KEY,
//    secret : SECRET
//});
//
//microgear.on('connected', function() {
//    connected = true;
//    console.log('Connected...');
//    microgear.setAlias("sirigear");
//});
//
//microgear.on('message', function(topic,body) {
//    console.log('incoming : '+topic+' : '+body);
//});
//
//microgear.on('closed', function() {
//    console.log('Closed...');
//});
//
//
//if (!connected) { 
//  microgear.connect(APPID);
//} 

module.exports = {
  //microgear: microgear
  mqtt: client
}
