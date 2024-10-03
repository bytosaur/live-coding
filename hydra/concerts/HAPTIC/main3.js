hush()
bpm = 12
setResolution(2560, 1600)

// ######## P5 ######## \\\
p5 = new P5(window.width, window.height)
num_points = 10
lastp = new Array(num_points).fill(0)
nextp = new Array(num_points).fill(0)
p = new Array(num_points).fill(0)
// simple random fifo per point
shift = (i, scale, offset) => {
    lastp[i] = nextp[i];
    nextp[i] = offset+Math.random()*(scale-offset*2);
}
edgy = 0
size = 18
move = 1
change = 1
remove = 1
slow = 100
scale = 0.2
steps = 10
show = ()=>(1)


/////////// DRAW \\\\\\\\\\\
p5.clear()
p5.draw = () => {
  // BACKGROUND
  if (amp < remove){
    p5.background(0)
  }
  // SAMPLE
  if (trig){
    for (let i=0; i<num_points; i++){
      	if (Math.random()<change){
        	shift(i, window.height, 0)
        }
    }
  }
  // CALC
  interpolate = Math.floor(p5.frameCount%slow)/slow*scale
  interpolated = move ? interpolate : 0
  for (let i=0; i<num_points; i++){
    p[i] = p5.lerp(lastp[i], nextp[i], interpolated);
  }
  //
  t = edgy? 1 : p5.map(p5.mouseY, 0, height, -10, 10, true);
  //t = edgy? 1 : Math.sin(time/4)*4
  p5.curveTightness(t);
  if(show()) {
    p5.stroke("white")
    p5.noFill()
    p5.strokeWeight(size)
    // === 
    p5.beginShape()
    for (let i=0; i<num_points-3; i++){
        p5.curveVertex(p[i],p[i+1])
    }
    p5.endShape()
  }
  //release trigger
  trig=0
}
p5.hide()


/// ######## HYDRA ######## \\\

s0.init({src: p5.canvas})
src(s0).out(o0)

edgy = 1
size = 1
move = 1
change = 0.2
remove = 10
slow = 400
scale = 1
steps = 10
show = ()=>(trig?1:0)
//show = ()=>(1)

// update = function() {
    
// }

src(o0)
// .scale(0.99)
// .modulateScale(o0, ()=>(-amp*0.2))
// .modulate(noise(), ()=>(-amp*0.002))
// .scrollY([0,-0.002,0,-0.999])
// .modulateRotate(
//   src(o0)
//   .sub(gradient())
//   ,0.002)
//  .colorama(()=>(trig?0.002:0))
  .brightness(()=>(-amp/2))
//  .invert(()=>(trig))
.layer(
	src(s0)
  	//.scale(()=>(trig?10:1.2))
    //.diff((src(s0).luma()))
  	.luma(0.1,0)
    .scrollX(-0.2)
  	//.repeat([1,1,3],[1,3])
    //.colorama(()=>(Math.sin(time/10)))
  )
//.modulate(src(s0).sub(gradient().brightness(-0.5)), ()=>(amp/1))
.layer(
  src(o0)
  .mask(
    noise(()=>(amp/10),()=>(amp*10))
    .brightness(-0.2)
    .pixelate([1,1,3],[1,3,2,1])
    .thresh(0,0)
	//.blend(solid(),()=>(1-amp))
  )
//   .saturate(20)
  //.modulate(o0,0.002)
  //.scrollY(0.9, 0.3)
  
)
// .blend(solid(),()=>(0.1-amp))
.out(o0)
