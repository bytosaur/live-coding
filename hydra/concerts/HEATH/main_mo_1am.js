

// ######## OSC ######## \\\
host = "localhost";
port = 8079;
text = 0
amp = 0
amp_trig = 0
trig=0
receiver=null

if (receiver !== null){
  	receiver.close()
  	console.log("Closing receiver")
  }
receiver = new OSCReceiver(host, port, function (message) {
  if (message.address == "/scTrig") {
    //x = message.args[0].value
    amp_trig = amp
    trig = 1
    counter = 12
    console.log("trigg")
  }
  else{
    trig = 0
  }
  if (message.address == "/scamp") {
    amp = message.args[0].value
  }
  if (message.address == "/data") {
    //text=0
    console.log(message.args)
    for (let i = 0; i < message.args.length; i++){
    	text+= message.args[i].value
    }
  }
});
receiver.onclose = function () {
  console.log("closed");
};
receiver.open();

// ######## TEXT ######## \\\
ptext = new P5()
ptext.draw = () => {
  ptext.background('black');
  ptext.textSize(122);
  ptext.fill('yellow');
  ptext.text(text, width/2, 100)
}
ptext.hide()
s1.init({src: ptext.canvas})

// ######## P5 ######## \\\
p5 = new P5(window.width, window.height, "WEBGL")
lastp = [0,0,0,0,0,0];
nextp = [0,0,0,0,0,0];
p = [0,0,0,0,0,0];
counter = 0
shift = (i, scale) => {
    lastp[i] = nextp[i];
    nextp[i] = Math.random()*scale;
}


p5.clear()
p5.draw = () => {
  // delete the background
//   if (p5.frameCount%100==0){
//       p5.background(0)
//   }
  if (amp < 0.1){
    p5.background(0)
  }
  // sample
  counter -= 1
  if (counter%2==0 && counter > 0){
    console.log(counter)
    for (let i=0; i<6; i++){
      	if (Math.random()>0.7)
        	shift(i, window.height)
    }
  }
  for (let i=0; i<6; i++){
    p[i] = p5.lerp(lastp[i], nextp[i], (p5.frameCount%100)/10);
  }
  p5.noFill()
  if (Math.random() > 0.9)
  	p5.stroke("orange")
  p5.strokeWeight(100)
  p5.beginShape()
  p5.vertex(p[1],p[2],p[4])
  p5.quadraticVertex(p[3],p[4], p[2], p[5], p[1], p[0])
  if (Math.random() > 0.9)
  	p5.stroke("purple")
  p5.quadraticVertex(p[5],p[2], p[0], p[1], p[4], p[2])
//   p5.quadraticVertex(p[1],p[4], p[2], p[3], p[2], p[1])
//   p5.quadraticVertex(p[0],p[2], p[3], p[1], p[0], p[5])
//   p5.vertex(p[5],p[2],p[1])
//   p5.vertex(p[4],p[3],p[0])
  p5.endShape(p5.CLOSE)
}
p5.hide()

p5.show()

/// ######## HYDRA ######## \\\

s0.init({src: p5.canvas})
src(s0).scrollX(-0.25).out()

render(o0)

setResolution(2000,1000)

src(o0)
  //.contrast(2)
  .brightness(()=>(-amp/200))
   .invert(()=>(amp > 0.5? 1 : 0))
   .diff(shape([3.2,1.7,17,4].fast(10), 0.3, 0.03).colorama(4).luma(0.3,))
  //.layer(shape(4,0.2,0).scale(1,0.1,10).luma().color(0,0,0).rotate(1,1).repeat())
  //.invert(()=>(trig))
  .scale(1.001)
  .layer(
    src(s0)
  .modulate(noise(), ()=>(amp_trig/10))
    .luma(0.1,0.21)
  )
  .scrollX([0.0002, -.0002, 0.502, 0])
  .scrollY([-0.0002,0, -.0002, 0.499, 0])
  .rotate(0.0003)
  . layer(
  src(o0)
    .mask(
      noise()
      .thresh(()=>(amp), 0)
      .pixelate([1.7, 3.3, 4, 0.7], [2.5, 1.2, 4, 1, 3])
      //.modulate(o0, 0.2)
  	//.modulate(voronoi(), ()=>(amp))
    ))
  //.invert(()=>(trig))
  .out()

src(s0).layer(src(s1).luma()).out(o1)




