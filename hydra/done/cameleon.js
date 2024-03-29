shape(()=>(Math.sin(time/4)+7)/2, 0.2, 0.000001)
.color(0.3, 0.7, 1)
.modulate(osc(10,0.02))
.scrollX( ()=>(Math.sin(time/5)/8)  )
.scrollX( ()=>(Math.sin(time/7)/10) )
.luma()
.out()

src(o1)
//.color(1, 0.3, 0.7)
.scrollX( ()=>(Math.cos(time/7)/900)
    + (Math.sin(time/3)/2000) )
.scrollY( ()=>(Math.sin(time/9)/900)
    + (Math.cos(time/3)/3000)  )
.hue(0.0007)
.scale(0.91, 1.1, 1.1, 0.7, 0.5)
.rotate([0.001, 0, -0.001, -0.0001, 0, 0.0003].fast(1))
.saturate(1.0001)
.layer(
  src(o0).diff(src(o0)
  .scale(()=>1+(Math.sin(time/3)/2))
  .scrollX(()=>(Math.sin(time/3)/10 ))
  .mask(o0)))
.out(o1)

render(o1)
