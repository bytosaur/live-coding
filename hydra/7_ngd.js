shape(() => (Math.sin(time)+2)*2)
.diff(
  src(o0)
  .color(0.1,0.2,0.4)
  .rotate( () => (time/100) )
  .scale( () => (time/40), 0.05 )
)
.out(o0)

shape(99)
.scale(0.001)
.add(src(o0))
.out(o1)


render(o1)
