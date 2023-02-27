shape(()=>( Math.sin(time/4) + 3))
.modulate(
  src(o0)
  .scrollX(0.2)
  .scrollY(()=>(time))
  .repeat(3)
)
.out(o0)
