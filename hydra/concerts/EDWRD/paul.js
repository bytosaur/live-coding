hush()

shape(4)
  .scale(1,0.3,1)
  .out(o1)

a.show()



setResolution(2000,1000)

shape([2.3,17,1.8])
.scrollY(0.1,0.2)
.repeat([0.2,.9,3],[0.2,3])
.diff(shape([3,5,99]).scale(()=>(a.fft[0]+0.02)*5).repeat())
.color(()=>(a.fft[0]*10),1,()=>(time%1))
//.mult(osc(1,1).thresh(0.5,0))
.mult(gradient(1))
.colorama(()=>(time%2))
.luma(0.2)
.rotate(1,0.2)
.out()

bpm=120


src(o2)
.hue(-0.001)
.rotate([0.0002,-0.0005])
// .scale([1.005,0.998,1,0.997].fast(0.2))
.scale([1.005].fast(0.2))
.modulate(o2,0.001)
.brightness(-0.002)
.scrollX(-0.001)
.layer(src(o0).luma(0.2,0))
//.layer(src(o2).mask(osc(10,01).thresh(0.5,0).pixelate([2,17,10],[1,20,2,4])))
.luma(0.3,0)
.out(o2)

src(o2).diff(osc(10,0.2).thresh().pixelate(1,1).mult(gradient(1))).out(o3)

render(o2)
