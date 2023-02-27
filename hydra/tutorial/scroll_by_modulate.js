

src(o0)
.modulateScrollY(gradient().pixelate(2,2).brightness(-0.5), -0.01)
.layer(osc(10, 0.2, 1).mask(shape(3, 0.3, 0)).luma())
.out(o0)


shape(4, 0.1, 0.95).out()
