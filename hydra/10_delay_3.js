voronoi()
.modulate(noise(10,0.1))
.color(0.6,0.6,0.4)
.add (
  shape(2)
  .repeat(1,10)
  .color(0.7,0.3,0.6)
  .scrollY( () => Math.sin(time / 10))
  .kaleid(3)
)
.diff(
  src(o0)
  .repeat()
)
.out(o0)

shape(3)
.modulate(
  osc()
)
.repeat( () => (Math.sin(time/2)+2) ,4.2)
.color(0.4,0.6,0.8)
.scrollY( () => (Math.sin(time/10) / 2))
.add(o0)
.out(o1)

render(o1)
