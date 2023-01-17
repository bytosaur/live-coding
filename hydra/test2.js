f = ()=>(a.fft[0])

a.show()

bpm = 10

shape([1,2,3,4,5])
.rotate( ()=>(time/10) )
.color(.7,f, ()=>(Math.sin(time/1)+1)/2 )
.modulate(o0)
.out(o0)

src(o0)
.diff(
  src(o1)
  .scale([0.99,1,0,1,1.01])
  .scrollX([0.001, 0.002, -0.003, 0, 0])
  .scrollY([0.001, -0.002])
).out(o1)

src(o1)
.mult(o0)
.modulateRotate(osc(10,0.1))
.rotate(()=>(time/1))
.out(o2)

render(o2)
