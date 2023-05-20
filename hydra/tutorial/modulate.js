osc(20, 0.1, 0.4)
.mask(shape(4, 0.3, 0))
.out(o0)

src(o1)
.modulate(gradient().pixelate().brightness(-0.5), -0.01)
.layer(o0)
//.luma()
.out(o1)

// TAKE CARE: rendering it to output buffer will make negative values be 0
gradient().brightness(-0.5).out(o2)

render(o1)

hush()
