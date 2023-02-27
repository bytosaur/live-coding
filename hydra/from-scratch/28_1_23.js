
bpm=20


shape(()=>(Math.sin(time)+7)/2)
.color(()=>(Math.sin(time)+1)/2, ()=>(Math.sin(time)+2)/4, 0)
.modulate(
  shape(3)
)
.out()

src(o0)
.add(
  src(o1)
  .scale([0.99, 1.01, 0.92, 1, 0.94])
  .hue(0.001)
  .scrollX([0.002, -0.022])
)
.out(o1)

solid().out(o1)

noise(1, 100)
.pixelate(2,2)
.color(0, 0.3, ()=>(Math.sin(time)+1) / 2)
.scrollX( ()=>(time/2))
.rotate( ()=>time/19)
.add(
  src(o1)
  .scrollX( ()=>(time/2))
  .rotate( ()=>time/20)
// .kaleid(3
)
.out(o2)

render(o2)
