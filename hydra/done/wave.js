
osc(50, 0.03, 0)
  .rotate(()=>(Math.sin(time/1)/8)+0.7)
  .modulateScale(osc(20, 0.01, 2), 0.2)
  .modulateScale(osc(20), 0.1)
  .modulateScale(osc(11).rotate(()=>(Math.sin(time/1)+3)/8), 0.5)
  .thresh(0.2)
  .color(0.7, 0, 1)
  .luma(0.1)
  .out(o0)

render(o0)
