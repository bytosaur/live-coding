
shape(3)
.diff(shape(3).scale(0.7))
.mask(shape(3).rotate(Math.PI/3).invert())
.mask(shape(99, 0.5))
.rotate(1, 1)
.color(1, 1, 0.7)
// .scale(()=>(a.fft[0]*8)+0.1)
// .modulate(voronoi(), 1)
// .diff(
//   src(o0)
//   .scale(0.1)
//   .color(0, 0, 0)
// )
.out()


src(o1)
.color(1, 1, 0.99)
// .scrollX([0.001, -0.002])
// .scrollY([0.003, -0.002])
// .scale([1.01, -1.001, 0])
.hue(1)
//.contrast(1.001)
.layer(
  src(o0)
  ///.scrollX([0.3, -0.2])
  .scrollY([0.8, -0.6])
  .luma(0.1)
)
.rotate([0.002, 0, -0.0003, 0, 0.01])
.out(o1)

src(o2)
//.diff(o1)
//modulate(o0, 1)
//.contrast(11)
.out(o2)

render(o2)





























KIT Today I Learned: hydra

shape(3)
.diff(shape(3).scale(0.8))
.mask(shape(3).rotate(Math.PI/3).invert())
.mask(shape(99, 0.55, 0.001))
.rotate(1,1)
.repeat(1.2, 1)
.scale(()=>(a.fft[0])+2)
.color(0.7, ()=>(a.fft[0]>0.2? 0.2 : 0.6), 1)
.luma(0.1)
.out()



render(o2)

src(o1)
.layer(src(o0).modulate(voronoi()))
.contrast(1)
.hue(0.001)
//.modulate(o1, -0.001)
.scrollX([0.0007, -0.001, 0, 0])
.scrollY([0.001, -0.001, 0, 0.0007])
.rotate([0.001, -0.001, 0, 0.003])
.modulateScale(gradient(), 0.001)
.luma(0.01)
.out(o1)

osc(1, 0.2, 0.3)
.diff(src(o1).scrollX(0.3).modulate(gradient()))
.modulateRotate(gradient(3), ()=>(Math.sin(time/20)+1)*3)
.saturate(1.2)
.diff(o0)
//.kaleid()
.out(o2)

render(o2)

YEEAAH we got some Triangle

what now?

all right so good so easy let's go crazy

AUDIO!!
