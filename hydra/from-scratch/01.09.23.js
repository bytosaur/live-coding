
osc(6,0.02,Math.PI/2)
.modulate(osc([0, 2, 10].smooth().fast(0.1), 0.0).rotate(Math.PI/2),0.1)
.colorama(0.09)
.out()

f = ()=>(Math.sin(time)+1)/10
f = 0

src(o1)
//.layer(osc(6,0.02).thresh().luma(0.9).color(0,0,0))
.hue(0.001)
.rotate(-0.004)
.modulateHue(src(o1),-2)
.layer(src(o0).mask(src(o0).mult(o0).thresh(0.2,0).invert()))
.layer(src(o1)
       .mask(noise(100,0.08).pixelate(3,1).thresh(0,f).modulate(o1,0.0))
      .scrollY(0.001)
      .rotate(0.004)
      .scale(1.001)
	.contrast(1.02)
      )
.out(o1)

render(o1)