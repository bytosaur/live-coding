
hush()

gradient(0.5)
.colorama(0.01)
.kaleid(3)
.mask(shape(3,0.3,0).modulate(o0,0.2))
.modulateHue(o1, 100)
.out(o1)

src(o0)
.layer(src(o1).luma(0.18))
.contrast(1.01)
.rotate(0.003)
.modulateRotate(o1,0.002)
.out(o0)

render(o0)
