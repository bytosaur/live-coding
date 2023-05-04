

shape(3, 0.2, 1e-6)
.diff(shape(3, 0.18, 1e-6).scale(0.8))
.mask(shape(3, 0.2, 1e-6).rotate(Math.PI/3).invert())
.mask(shape(99, 0.37, 1e-6))
.luma()
.color( ()=>(Math.cos(time)), 1, ()=>(Math.sin(time)))
.out()

src(o1)
.layer(
  src(o0)
  .scrollX(()=>(time/10), [-0.1, 0, 0, -0.3, 0.2])
  .scrollY(()=>(time/10), [0.1, -0.3, 0.2, 0])
)
.modulateScrollY(shape(1, 2).rotate(Math.PI/2), )
.out(o1)

render(o1)
