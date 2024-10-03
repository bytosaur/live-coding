
s0.initCam()


src(s0)
.out(o0)

src(o0)
.diff(s0)
.out(o1)


src(o2)
.scale(1.0015)
.brightness(-0.002)
.rotate(0.003)
.modulate(o2,0.003)
//.luma(0.4,.1)
.hue(0.001)
.layer(
  src(o1)
  .saturate(4)
  .luma(0.1)
  .modulate(
    noise()
    //.modulate(o1)
    ,0.)
  )
.out(o2)

render(o2)

a.setSmooth(0.9)

src(o0)
.brightness(-0.01)
.layer(
src(s0)
  .invert()
  .luma(0.5,0)
  .invert()
  .thresh(0.1,0.05)
  .mult(
  		osc(2,0.1,3)
        .colorama(1)
        .kaleid(2)
        , ()=>(a.fft[0]*.1)+.1)
.saturate(4)
.modulate(
  src(s0)
))
  .out()