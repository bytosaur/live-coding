shape(3)
// .diff(
//   src(o0)
//   .scale(1.00001)
//   .rotate(99)
// )
.add(
  shape(2)
  .color(() => (Math.sin(time/20) / 3),0.4,0.8)
  .scrollX(0.1)
  .scrollY(0.1)
)
.scrollX( () => (Math.sin(time/20)) )
.scrollY( () => (Math.sin(time/20)) )
.out(o0)

noise(3,0.1)
.color(0.3, () => (Math.sin(time/20) / 3) ,0.7)
.diff(
  src(o1)
  .repeat(1)
)
.add(
  src(o0)
)
// .repeat(2, 2)
.kaleid(() => (Math.sin(time/20) + 2) / 99)
.out(o1)


render(o1)
