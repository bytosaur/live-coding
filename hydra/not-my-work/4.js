// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
src(o1)
  .modulate(
  osc(Math.PI*2,0,Math.PI/2).scale(1/128)
  .brightness(-.5).modulate(
  noise(1,0.02).mult(
    noise(.3,.01).add(solid(1,1)).color(.5,.5).contrast(3).posterize(3,1).invert())
    .sub(gradient()),1),.003)
  .layer(
  osc(10,0.1,1.5).layer(
    osc(10,0.1).color(1,1,-1).invert().mask(
      osc(Math.PI*2,0,Math.PI/2).scale(1/64)
      .thresh(.5,0).modulate(
        noise(1,0.02).mult(
    noise(.3,.01).add(solid(1,1)).color(.5,.5).contrast(3).posterize(3,1).invert())
        .sub(gradient()),1)
      .mult(shape(4,.28,0).invert())))
  .mask(shape(4,.3,0)))
  .out(o1)

src(o1).out()
