a.setSmooth(0.8)
a.show()

speed = 0.1
bpm = 170 /

shape([1.7, 2.3, 3.7], 0.3)
.repeat(0.7,[2.3,1.8,1.3])
// .modulate(osc(10,0.1), 0.1)
.scrollX([0.4, 0.7])
//.color(()=>(a.fft[0] > 0.9 ? 0 : 0.7), 0.5, ()=>(a.fft[0] > 0.1 ? 0 : 0.7))
.color(()=>(cc[1]), ()=>(a.fft[0] > 0.4 ? 1: 0), ()=>(a.fft[0] < 0.4 ? 0: 0.6))
.modulate(o0, 10)
.out()

src(o1)
.saturate(1.2)
.hue(0.0007)
.layer(shape([2.3, 1.2],0.2).luma().color(0,0,0))
// .scrollX([0.01, 0, 0.02, -0.001])
// .scrollY([0.001, 0.1, -0.001])
.rotate([0.0032, 0, -0.0026])
.layer(src(o0).luma())
.out(o1)

src(o2)
.layer(shape([2.3, 1.2],2).luma().color(0,0,0))
.hue(0.00003)
.rotate(0.0007)
.scale([1.001, -1.001, 0.999, 1])
.layer(src(o1).luma())
.out(o2)


osc(1, ()=>(cc[9]*30)).pixelate(2,1).scrollX(0.7)
.color(()=>(cc[10])).r()
.layer(src(o1).luma( ()=>(cc[10]) ))
.kaleid(()=>(Math.sin(time/14)+2))
.out(o3)


render(o3)
