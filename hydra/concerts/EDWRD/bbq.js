a.setSmooth(0.9)

s0.initCam()

s0.initCam()

gradient()
  .g()
  .modulate(osc(40,0.1),0.03)
  .kaleid(0)
  .out(o1)

src(o0)
.modulate(src(o0).hue((()=>(time/1000))),()=>(Math.sin(time/10)/2000))
.layer(
	src(s0)
  //.modulateRotate(src(o0),0.4)
  .modulate(s0,()=>(Math.sin(time/5)+1)*1)
  .invert([0,1].smooth().fast(0.3))
  .contrast(3)
  //.modulateScale(src(o1),-1.5)
  .luma(0.5,0.1)
  .invert()
  .hue([0])
)
.out()


render(o0)



src(o0)
.modulate(osc(10,0.05,2),[0.003,-0.003].smooth().fast(0.05))
//.scale([0.995,1.005].smooth().fast(0.1))
.scrollY(-0.0005)
.saturate(()=>(Math.sin(time/10)*10))
//.saturate(()=>(Math.sin(time/10)+2)*3)
//.hue(0.02)
.layer(
  src(s0)
  .invert([0,0.6].fast(0.05))
  .luma(0.5,[-0.1,0.1].smooth().fast(0.1))
  .contrast(10)
  )
 .layer(
  src(o0)
    .mask(
      shape(4,0.2,0)
      .scale(1,10,1)
      //.invert()
      .repeat(1,[3,10].fast(0.23))
      .scrollY(()=>(time/30))
  	  .rotate([0,Math.PI/2].fast(0.12))
      .blend(solid(),[0,1].fast(0.017))
    )
  ) 
 .out(o0)


src(o0)
.modulate(osc(10,0.05,2),[0.003,-0.003].smooth().fast(0.05))
//.scale([0.995,1.005].smooth().fast(0.1))
.scrollY(-0.0005)
.saturate(()=>(Math.sin(time/10)*10))
//.saturate(()=>(Math.sin(time/10)+2)*3)
//.hue(0.02)
.layer(
  src(s0)
  .invert([0,1].fast(0.05))
  .luma(0.5,[-0.1,0.1].smooth().fast(0.1))
  .contrast(10)
  ).out(o0)

/// psychodelic cam
src(o0)
.modulate(o0,0.002)
.scale(0.999)
.contrast(1.1)
.layer(
  src(s0)
  .invert([0,1].fast(0.2))
  .luma(()=>(a.fft[0]/2)+0.4,0.1)
  .saturate(10)
  .colorama(0.01)
  ).out(o0)