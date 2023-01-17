voronoi()
.color(0.7,0.2,0.9)
.diff(
  src(o0)
  .modulate(voronoi())
)
.invert()
.add(
  shape(3)
  .rotate(
    () => (Math.sin(time/4))
  )
)
.out(o0)

solid().out(o0)

render(o0)
