


shape([1,2,3,4,99],0.4,()=>(Math.sin(time)/200))
.mult(gradient().colorama(0.02)).out()

bpm = 120 / 8

src(o1)
.layer(noise([10,11,12].fast(20).offset(0.5),0).brightness(0.5).thresh(0.8,0.2).luma(0.5,0).invert().colorama(99))
.scale(0.99)
.scrollY(0.0002)
.rotate([0.003, -0.003])
.modulateScale(o1,-0.002)
.layer(src(o0).luma(0.2,0))
// .invert([0,1].offset(0.5))
.mask(shape(99,0.6,0).invert([1,0]))
.layer(src(o0).repeat([12,1,0.2]).luma(0.18))
.out(o1)


render(o1)
