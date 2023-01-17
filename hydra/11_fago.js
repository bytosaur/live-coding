shape(()=>( Math.sin(time/4) +2))
.modulate(
  src(o0)
  .scrollX(time)
  .scrollY(()=>(time))
  .repeat(2)
)
.color(0.2,0.7,.3)
.out(o0)


noise(
  1, 0.1
)
.diff(
  src(o0)
  .scale(0.3)
  .hue(1)
)
.out(o1)

render(o1)
