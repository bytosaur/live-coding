
s0.initCam()
s1.initScreen()


x=.25
x2=.125
hleft=x+x2

bpm = 120

setResolution(4000,4000)

s=30
s4=s/4
src(o0)
.layer(
src(s0)//.modulate(src(s0).thresh().mult(gradient()),0.1)
.scale(x)
.scrollX(x2)
.scrollY(x2)
.mask(
  shape(4, x, 0)
    .scrollX([hleft, hleft-x, hleft-2*x, hleft-3*x].fast(s))
    .scrollY([hleft, hleft-x, hleft-2*x, hleft-3*x]
             .offset(0).fast(s4))
  )
)
.layer(src(o0).mask(
  noise(1,1).brightness(.24).thresh(0.5,0).pixelate(1,1)
//   osc(100,.01).thresh(0.5,0)
)
  )
.out()
reader = ()=>(src(o0)
.mask(
  shape(4, x, 0)
    .scrollX([hleft-x, hleft-2*x, hleft-3*x, hleft].fast(s))
    .scrollY([hleft, hleft-x, hleft-2*x, hleft-3*x]
             .offset(0.25).fast(s4))
  )
.scrollX([hleft+x, hleft+2*x, hleft+3*x, hleft].fast(s))
.scrollY([hleft, hleft+x, hleft+2*x, hleft+3*x]
           .offset(0.25).fast(s4))
.scrollX(x)
.scrollY(x)
.scale(4))

src(o2)
.scrollY(-0.002)
.blend(solid(),()=>(a.fft[0]/10))
.layer(
  reader()
//   .invert()
//   .luma(0.6,.01)
//   .invert()
  .hue(()=>(time/100))
  .contrast(4)
  .saturate(0.4)
  .luma(()=>(1-a.fft[0]))
)
.out(o2)


src(o2)
//.pixelate(100,10)
.modulate(s0,0.002)
.scrollY(-0.003)
.layer(
  src(s0)
  .mask(
    reader()
    .diff(s0)
    .thresh(0.1,0)
    .invert()
  )
  .contrast(3)
)
.out(o2)


render(o2)