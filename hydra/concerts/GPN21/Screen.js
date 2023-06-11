

src(o0)
.layer(
  shape(2)
  .luma()
  .color(0,0,0)
  .rotate()
)

// .layer(
  shape(3).r().mult(osc(1,1,2).pixelate(1,1))
  // .modulate(osc(1,1,1).rotate(1,1),0.2)
// .modulate(
//   osc(4,0,1.5).brightness(-0.5).modulate(noise(3).sub(gradient(2)),1),()=>(cc[1]/100*-1))
.out()
