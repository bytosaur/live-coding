
shape(
	()=>(a.fft[0]+2),
	()=>(a.fft[0]+0.2),0.7)
.color(1,0,0)
.colorama(3)
.kaleid()
.repeat(3,1)
.luma(0.5,0)
.out()

src(o1)
.scale([0.99,1,1.01,1])
.color(1,0.94,0.96)
.saturate(1.3)
.layer(src(o0)
	   .luma(0.5,0.2)
	   .invert()
	   .colorama()
	   )
.out(o1)


render(o1)