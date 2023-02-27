

shape(2, .7)
.color(0.2, 0.9, 0.7)
.repeat(1,8)
.blend(
  src(o0)
  .scale(0.9)
  .hue(0.2)
, () => (Math.sin(time)+2)/4 )
.out(o0)

src(o0)
.modulate(osc(10, .1))
.kaleid(() => (Math.sin(time/4) +2))
.out(o1)

voronoi(() => (Math.sin(time)+3)/2 , .4)
.thresh(0.5, 0.05)
.color(() => (Math.sin(time)+2)/2, 0.4, 0.2)
.modulateRotate(
  shape(3, 0.5)
  .rotate(() => (time/10))
  .repeat(2,2)
  .rotate(() => (time/10))
)
.diff(
  src(o0)
  .modulate(osc(10, .1))
)
.out(o1)

render(o1)
