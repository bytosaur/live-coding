s0.initCam()

src(s0)
  .luma(() => (Math.sin(time) + 2) / 2)
  .saturate(10)
  .diff(src(o0), 0.9)
  .modulate(o0, 0.001)
  .hue(0.01)
  .rotate(() => (time / 1000000))
  .saturate(1.05)
  .out()

  render(o0)
