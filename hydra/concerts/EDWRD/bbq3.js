s0.initCam()

setResolution(1920,1080)

src(s0)
.out(o0)

src(o2)
.scale(1.0005)
//.brightness(-0.0015*(Math.sin(time/12)+1)/0.2)
.brightness(-0.004)
.modulate(
  noise(3)
  .sub(gradient(),1)
  ,()=>(0.0005*(Math.sin(time/10))))
//.rotate(0.0003)
//.modulate(o2,0.0003)
.scrollY(-0.0003)
//.luma(0.3)
//.hue(0.001)
.layer(
  src(o0)
  .diff(s0)
  .luma(0.1)
  .modulate(
    noise(10,0.2)
    //.modulate(o1)
    ,()=>(Math.sin(time/10)+1)/100
  )
  )
.blend(o2,0.05)
.layer(shape(4).scale(1,10,0.1).luma().color(0,0,0).scrollY(0.5))
.out(o2)

render(o2)