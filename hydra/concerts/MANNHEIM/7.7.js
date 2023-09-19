
bpm=125/2.0

speed = 0.1


// a.fft[0] > 0.5 ? 0 : 0.5)

a.show()

a.onBeat = () => ( shape(Math.random()*10).out() )

s0.initCam()

//shape([1.6, 99, 0.6, 99])
src(s0)
.color(1, ()=>(a.fft[0]), 1)
.repeat([1.5].fast(0.5), [1.4,0.7])
.modulate(o0, 0.1)
//.pixelate(100, 23)
//.modulate(voronoi(1))
.luma(0.1,0.002)
.colorama(0.001)
.out()


src(o1)
.layer(osc(36).modulate(osc(6).rotate(Math.PI/2)).luma().color(0,0,0))
.scale([0.97, 1, 0.997, 1, 1].offset(0.5))
.rotate([0.001, -0.001, 0, 0].offset(0.2))
.scrollX([0, -0.0001, 0, 0.0001, 0])
.layer(
  src(o0)
  .luma(()=>(1-a.fft[0]*10))
)
.colorama(0.001)
.modulate(src(o1), 0.3)
.out(o1)


src(o2)
.rotate(0.002)
.scale([1.003, 1.001, 1, 1.00])
.layer(src(o1).luma())
.mask(src(o0).invert())
.out(o2)


src(o1)
.layer(osc(36).thresh(0.95).modulate(noise(6).rotate(Math.PI/2)).luma(0,0).color(0,0,0))
//.scale([0.97, 1, 0.997, 1, 1].offset(0.5))
.rotate([0.001, -0.001, 0, 0].offset(0.2))
.scrollX([0, -0.0001, 0, 0.0001, 0])
.layer(
  src(o0)
  .luma(()=>(a.fft[0]))
)
//.colorama(0.001)
.out(o1)

render(o0)
