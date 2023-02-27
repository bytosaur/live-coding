shape(4)
.scale(0.9, 2)
.modulate(shape(3)
.modulate(osc(()=>(Math.sin(time/1)+1)*10,()=>(Math.sin(time/10)+2)*2)))
.rotate(0.3)
.scrollX(()=>(time))
.scrollY(()=>(time/2))
.repeat(4,4)
.modulate(voronoi())
.color(0.3, ()=>(Math.sin(time/10)+1)/2, 0.1)
.out(o0)

voronoi(1,3,1)
.color(()=>(Math.sin(time/10)+1)/2, 0.6, 0.2)
.diff(
  src(o0)
)
.out(o1)

src(o1)
.add(
  src(o2)
  .scale([0.99, 0.92, 1.1])
  .scrollX([0.0099, 0.092, -1.1])
  .hue(0.5)
  .mask(
    src(o1)
    .scale([0.99, 0.92, 1.1])
  )
)
.kaleid(()=>(Math.sin(time/2)+2))
.out(o2)

render(o2)
