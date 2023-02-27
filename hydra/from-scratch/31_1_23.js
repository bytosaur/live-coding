shape(3)
.rotate(10, 2)
.repeat()
.rotate(10,0.1)
.scale([0.2, 3].ease())
.scrollX([0.2, 1, 1, 1, 3].ease())
.color([0.2, 0.3, 0.9].smooth(), 0, 1)
.blend(o0, 0.9)
.out()

solid(0)
.diff(
  src(o0)
)
.out(o1)

render(o1)
