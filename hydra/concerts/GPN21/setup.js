a.show()
a.setBins(6)
a.setSmooth(0.93)
a.setCutoff(0)

speed=0.5
bpm=170/8.0

hush()















shape(()=>(a.fft[1] > 0.1 ? 1.7 : 2.3)+1,0.3)
.scrollX([0.1, 0.3, 0.2, 0.7])
.modulate(o0, 0.1)
//.scale(()=>(a.fft[0]*4)+0.1)
.mult(osc(1,1,2).pixelate(1,1))
.color([1, 0.2, 0],()=>(a.fft[1]*10),()=>(cc[9]))
.repeat(1,()=>(cc[17])*10)
.out()

src(o1)
.scale(1.001)
.layer(shape(2).mask(voronoi(1).thresh()).luma().color(0,0,0))
.rotate([0.0005, -0.0007, 0.0006])
.scrollY([0.001, -0.001, 0, 0.0003].fast(0.5))
.layer(src(o0).luma(0.001,0))
.out(o1)

src(o2)
.scale(0.99)
.layer(src(o1).mask(src(o0).invert()).luma(0,()=>(cc[26])))
.out(o2)

osc(1,()=>(cc[25]*100)).pixelate(1,1)
.color(()=>(cc[27])).r()
.brightness(()=>(cc[26]-0.5))
.layer(src(o1).luma(()=>(cc[26]),0))
.out(o3)


render(o3)
