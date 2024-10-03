hush()

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
edgy = 1
size = 18
move = 1
change = 1
remove = 1
slow = 100
scale = 0.2
steps = 10
play = 1
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
  interpolate = Math.floor(p5.frameCount%slow)/slow*scale
  //interpolate = (Math.floor(p5.frameCount/slow*steps) % steps) / steps * scale
  interpolated = move ? interpolate : 0
  for (let i=0; i<num_points; i++){
    p[i] = p5.lerp(lastp[i], nextp[i], interpolated);
  }
  //
  t = edgy? 1 : p5.map(p5.mouseY, 0, height, -10, 10, true);
  p5.curveTightness(t);
  if(play) {
    p5.stroke("white")
    p5.noFill()
    p5.strokeWeight(size)
    // === 
    p5.beginShape()
    p5.curveVertex(p[0],p[1])
//     while(Math.random() > 0.9){
//       p5.vertex(
//           p[Math.floor(Math.random()*num_points)],
//           p[Math.floor(Math.random()*num_points)],
//       )
//     }
//     p5.quadraticVertex(p[2],p[3], p[4], p[5])
//     while(Math.random() > 0.9){
//       p5.vertex(
//           p[Math.floor(Math.random()*num_points)],
//           p[Math.floor(Math.random()*num_points)],
//       )
//     }
    p5.curveVertex(p[1],p[2])
    p5.curveVertex(p[2],p[3])
    p5.curveVertex(p[3],p[4])
    p5.curveVertex(p[5],p[6])
    p5.curveVertex(p[6],p[7])
    //changeColor(0.02)
    //p5.quadraticVertex(p[6],p[7], p[8], p[9])
    //p5.endShape(p5.CLOSE)
    p5.endShape()
  }
  //release trigger
  trig=0
}
p5.hide()

p5.hide()

/// ######## HYDRA ######## \\\
bpm=120

setResolution(1920,1080)

s0.init({src: p5.canvas})
src(o0).layer(src(s0).scrollX(-.25).luma()).out(o0)


edgy = 1
size = 3
move = 1
change = 1
remove = 0.1
slow = 100
scale = 1
steps = 10
play = ()=>(trig?1:0)
play = 1

src(o0)
.scrollY(0.499)
// .modulateRotate(noise(1,0.001).sub(gradient()),0.002)
// .colorama(()=>(trig?0.1:0))
//  .brightness(()=>(-amp/10))
//.invert(()=>(trig))
.layer(
	src(s0)
    .scrollX(-0.2)
    .scale(1)
  	.repeat([1,3],[3,1,3])
  	.luma(0.2,0.0)
  )
.modulate(src(o0), ()=>(amp/10))
// .layer(
//   src(o0)
//   .mask(
//     noise(1,0.1)
//     .brightness(0.1)
//     .pixelate(3,1)
//     .thresh())
//   .saturate(20)
//   .scrollY(0.499)
// )
.out()

render(o0)


// some glitch noise
noise([1,3,2.3,1.7],0)
.pixelate([5,10,2].offset(0.24).fast(0.2),[3,35,7].fast(0.42))
.modulate(src(o1),[12,0.135,25,3].fast(25))
.mask(
    noise([1,7,0.3,90],[0,0.02,0.1])
    .diff(src(o1).scroll(0.002))
    .pixelate([6,19].offset(0.28).fast(0.25),[3,12,2].offset(0.58).fast(0.37)))
.thresh(0.1,0)
.thresh(()=>(1-amp/1.1),0)
.out(o1)