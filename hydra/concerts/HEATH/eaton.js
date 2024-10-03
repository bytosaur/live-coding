hush()

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
    counter = 20
    console.log("trigg")
  }
  if (message.address == "/scamp") {
    amp = message.args[0].value
  }
  if (message.address == "/codeRelay") {
    text=""
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
  ptext.textSize(20);
  ptext.fill('purple');
  ptext.text(text, 20, 0)
}
ptext.hide()
s1.init({src: ptext.canvas})
psam = new P5()
psam.draw = () => {
  psam.background('black');
  psam.textSize(400);
  psam.fill("white");
  psamtext = Math.random()<0.2 ? "小心" : "stairs"
  psam.text(psamtext, 20, 400)
}
psam.hide()
s2.init({src: psam.canvas})

// ######## P5 ######## \\\
p5 = new P5(window.width, window.height)
num_points = 10
lastp = new Array(num_points).fill(0)
nextp = new Array(num_points).fill(0)
p = new Array(num_points).fill(0)
counter = 0
// simple random fifo per point
shift = (i, scale) => {
    lastp[i] = nextp[i];
    nextp[i] = Math.random()*scale;
}

// extra functions colors
changeColor = (chance, color=null) => {
  if (color !== null){
    if (Math.random() < chance)
      p5.stroke(color)
  }
  else{
  colors = ["purple", "orange"]
  if (Math.random() < chance)
  	p5.stroke(colors[Math.floor(Math.random()*2)])
  }
}


/////////// DRAW \\\\\\\\\\\
p5.clear()
p5.draw = () => {
  size = 18
  move = 0
  change = 0.
  remove = 1
  speed = 0
  scale = 1
  steps = 1
  // BACKGROUND
  if (amp < remove){
    p5.background(0)
  }
  // SAMPLE
  counter -= 1
  if (trig){
    for (let i=0; i<num_points; i++){
      	if (Math.random()<change){
        	shift(i, window.height)
        }
    }
  }
  // CALC
  interpolate = Math.floor(p5.frameCount%speed)/speed*scale
  //interpolate = (Math.floor(p5.frameCount/speed*steps) % steps) / steps * scale
  console.log(interpolate)
  interpolated = move ? interpolate : 0
    //interpolate = (Math.sin(p5.frameCount*speed)+1)/2
  for (let i=0; i<num_points; i++){
    p[i] = p5.lerp(lastp[i], nextp[i], interpolated);
  }
  //
  if(1) {
    p5.stroke("white")
    p5.noFill()
    p5.strokeWeight(size)
    // === 
    p5.beginShape()
    p5.vertex(p[0],p[1])
    while(Math.random() > 0.9){
      p5.vertex(
          p[Math.floor(Math.random()*num_points)],
          p[Math.floor(Math.random()*num_points)],
      )
    }
    p5.quadraticVertex(p[2],p[3], p[4], p[5])
    while(Math.random() > 0.9){
      p5.vertex(
          p[Math.floor(Math.random()*num_points)],
          p[Math.floor(Math.random()*num_points)],
      )
    }
    p5.vertex(p[2],p[3])
    //changeColor(0.02)
    p5.quadraticVertex(p[6],p[7], p[8], p[9])
    //p5.endShape(p5.CLOSE)
    p5.endShape()
  }
  //release trigger
  trig=0
}
p5.hide()

p5.hide()


/// ######## HYDRA ######## \\\

bpm=12

setResolution(1920,1080)


s0.init({src: p5.canvas})
src(s0).out(o0)

render(o1)


src(o1)
//.saturate(1.03)
.colorama(()=>(trig?Math.random()/1:0))
.invert(()=>(trig))
//.invert(()=>(amp > 0.5?1:0))
//.colorama(()=>(trig))
.brightness(()=>(-amp/10))
.layer(
  shape([0.3,1.7,4].fast(1.7),[0.5,0.9,0.2],[0.002,0.03])
  .colorama(0.02).luma()
  .scrollY(0.3,0.3)
  .mask(o0)
)
//.rotate(()=>trig?(Math.random()-0.5)/1:0)
.layer(
  src(s0)
  .scrollX(-0.25)
  .luma(0.3,0.0)
  .mask(o1, ()=>(amp))
  .repeat([1.3,1.8,1].fast(1),[1,1.7].fast(1))
)
//.modulate(src(o1).mask(o0),()=>(amp/10)*(amp>0.9?1:-1))
.scrollX(0.2)
.blend(solid(),()=>(amp))
//.layer(src(s2).luma())
.out(o1)


// some glitch noise
noise([1,3,2.3,1.7],0)
.pixelate([5,10,2].offset(0.24).fast(0.2),[3,35,7].fast(0.42))
.modulate(src(o0),[12,0.135,25,3].fast(25))
.mask(
    noise([1,7,0.3,90],[0,0.02,0.1])
    .diff(src(o0).scroll(0.002))
    .pixelate([6,19].offset(0.28).fast(0.25),[3,12,2].offset(0.58).fast(0.37)))
.thresh(0.1,0)
.thresh(()=>(1-amp),0)
.out(o0)



src(o1)
.layer(
  src(s1).scale(1,-1).luma(0.1,0.)) // winstons code
 .out(o2)

render(o2)


