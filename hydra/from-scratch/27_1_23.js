
// ok lets go 11 min !!!

solid().out(o2)

shape(3)
.modulate(
  voronoi()
)
.color(0, () => (Math.sin(time)+1)/2, 1 )
.out(o0)

src(o0)
.diff(
  src(o1)
  .scrollY([0.0002, 0.0001, -0,001])
  .scrollX([-0.002, 0.0001, -0,001])
  .scale([0.99, 1, 1, 0.98, 1.001])
  .hue(0.001)
)
.scrollX(() => (Math.sin(time/10)+1)/200)
.out(o1)

voronoi(0.1, 20)
.color(0.2, 1, 1)
.diff(src(o1))
.modulateRotate(
  src(o0)
  .scale([1.9, 3, 2.1])
  .scrollX([23, 21.2, 3])
  .repeat(3)
)
.out(o2)

render(o2)
