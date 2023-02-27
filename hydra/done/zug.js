f = ()=>(a.fft[0])
bpm = 10
a.show()

shape([1.5, 2.3, 3.2, 3.7])
.modulate(o0)
.color(0.7,0.3,1)
.rotate( ()=> (time/100))
.out(o0)

src(o0)
.diff(
  src(o1)
  .scale([1.01, 1, -0.99, 1, 1])
  .scrollX([.001, 0, 0, -.002])
  .scrollY([.003, -.01, 0])
  .mult(src(o1).color(0.99, .9, 0.9))
)
.out(o1)

src(o1)
.diff(src(o2).scrollX([.001, 0, 0, -.002]))
.rotate( ()=>(time/(2000000 + time*100)))
.out(o2)

gradient()
.pixelate([3,5,7],[1,2])
.brightness(-0.3)
.diff(o2)
.out(o3)

render(o3)
