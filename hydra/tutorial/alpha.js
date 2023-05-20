// here luma and r (also g and b) have the same effect
osc(10, 0.1, 1)
.layer(
  shape(3)
  .luma()     // luma() thresholds all pixels by modifying alpha
  .r()        // r() instead sets all values (including alpha) to the red channel
)
.layer(
  osc(20, 0.02, 0.7).luma()
)
.out()

render(o0)
