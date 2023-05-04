shape(()=>( Math.sin(time/4) + 3), 0.4, 0.01)
.modulate(
  src(o0)
  .scrollX(0.2)
  .scrollY(()=>(time))
  .repeat(3)
)
.color(0.3, 1, 0.7)
.out(o0)
