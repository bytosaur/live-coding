
// osc
host = "localhost";
port = 8079;
amp = 0
amp_sampled = 0
if (receiver !== null){
  	receiver.close()
  	console.log("Closing receiver")
  }
receiver = new OSCReceiver(host, port, function (message) {
  if (message.address == "/scTrig") {
    //x = message.args[0].value
    amp_sampled = amp
  }
  if (message.address == "/scamp") {
    amp = message.args[0].value
  }
});
receiver.onclose = function () {
  console.log("closed");
};
receiver.open();


// hydra
k = () => {
  return amp_sampled /2
}
shape(3, k, ).out()


