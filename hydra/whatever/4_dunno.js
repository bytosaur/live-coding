
shape(3)
.modulate(voronoi(1,0.2))
.repeat(2.5, 3.1)
.modulateScrollY(voronoi())
.colorama( () => (Math.sin(time/5) + 1 )/6 + 0.33 )
.modulateRotate(
  src(o0)
  .scale(0.9)
  .kaleid(0.2)
)
.out(o0)

src(o0)
.diff(
  src(o0)
  .scale(0.9)
  // .repeatX(()=> ((time/ 100) + 2))
  .rotate(0.9)
  .colorama(0.6)
)
.modulateScrollX(
  shape(3)
  .scale(() => (Math.sin(time/10) + 1)  )
  .repeat(() => (Math.sin(time/3) + 1) )
)
.modulate(
  src(o2)
)
//.kaleid(2)
.out(o1)

shape(3)
.repeat(() => (Math.sin(time/3) + 3 )/3 + 0.33 )
.rotate(() => (Math.sin(time/3) + 3 )/3 + 0.33 )
.scroll(() => (time / 20))
.modulate(osc(30,0.1,1) )
.out(o2)

render(o1)
