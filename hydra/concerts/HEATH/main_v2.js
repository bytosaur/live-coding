
// osc
host = "localhost";
port = 8079;
amp = 0
amp_sampled = 0
receiver=null
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

osc().out()


p5 = new P5()
lastp = [0,0,0,0,0,0];
nextp = [0,0,0,0,0,0];
p = [0,0,0,0,0,0];
p5.clear()

p5.draw = () => {
  if (p5.frameCount%100==10){
      p5.background(0)
  }
  for (let i=0; i<6; i++){
    if (Math.random() < 0.01){
      lastp[i] = nextp[i];
      nextp[i] = Math.random()*window.width;
    }
    p[i] = p5.lerp(lastp[i], nextp[i], (p5.frameCount%100)/100);
  }
  p5.stroke("orange")
  p5.strokeWeight(1)
  p5.beginShape()
  p5.vertex(p[3],p[3])
  p5.quadraticVertex(p[2],p[3], p[4], p[5])
  p5.quadraticVertex(p[3],p[5], -p[0], -p[1])
  p5.endShape(p5.CLOSE)
}
p5.hide()

s0.init({src: p5.canvas})

setResolution(2000,1000)

src(o0)
  .brightness(k)
  .layer(src(s0).luma(0.3,0))
  .scrollX(0.0002)
  .invert(()=>(k()))
  .out()

// hydra
k = () => {
  return -amp
}




