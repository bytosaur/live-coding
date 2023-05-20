speed = 1

bpm = 10

src(o1)
  //.color(0.98, 0.9999, 0.99999)
  .scrollX(() => (Math.cos(time / 7) / 5000) +
    (Math.sin(time / 6) / 5000))
  .scrollY(() => (Math.sin(time / 9) / 2000) +
    (Math.cos(time / 6) / 5000))
  //.saturate(1.01)
  .hue(0.0006)
  //.contrast(1.01)
  .layer(src(o0)
    .add(src(o0)
        .scrollX(() => (Math.sin(time / 3) / 200))
        .scale(() => 1 + (Math.sin(time / 3) / 200))
        .mask(o0)
      )
  )
  //.luma()
  .scale(1, [-1.001, 1.001].fast(0.1), 1.005,
      [0.7, 0.22, 0.3],
      [0.5, 0.3, 0.6])
  .rotate([0.001, -0.001, 0.0001, 0, -0.0001].fast(0.1))
  .out(o1)

render(o1)
