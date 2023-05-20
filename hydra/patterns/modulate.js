
//
// gradient()
// .kaleid(3)
// .color(0,100)
// .out(o2)

speed = 0.2

a.show()

bpm = 10

shape(2)
.scale(()=>(a.fft[0]+1)).out()

render()

gradient()
.rotate(Math.PI/2)
.scrollX(0.5)
.mask(
  shape(2, 0.5, 0.00001)
  .rotate(Math.PI/2)
  .scrollX(0.25))
.color(0,100)
.out(o2)

src(o0)
//.modulateScale(gradient(), ()=>(Math.sin(time)))
//.modulate(src(o0).scale(0.9), 0.2)
.modulate(src(o2).rotate(1,1).g())
.modulate(
  src(o2)
  , [0.2, 0.2, -0.2].smooth(0.1)
)
.out(o1)

render(o1)
