// the simple feedback i learned first

src(o0)
.diff(
  src(o1)
  .scale([0.99,1,0,1,1.01].fast(.2))
  .scrollX([0.001, 0.002, -0.003, 0, 0].fast(.2))
  .scrollY([0.001, -0.002])
)
//.layer(o0)
.out(o1)

render(o2)
