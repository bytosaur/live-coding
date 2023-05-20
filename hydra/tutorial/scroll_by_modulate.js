

src(o1)
.modulateScrollY(gradient().pixelate(2,2).brightness(-0.5), -0.01)
.layer(src(o0).luma(.5))
.out(o1)

render(o1)

osc(10, 0.2, 1).mask(shape(3, 0.3, 0)).out()
