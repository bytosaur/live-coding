

src(o1)
//.color(0.9999, 0.999, 0.9999)
.scrollX( ()=>(Math.cos(time/7)/5000)
    + (Math.sin(time/6)/5000) )
.scrollY( ()=>(Math.sin(time/9)/2000)
    + (Math.cos(time/6)/5000)  )
.hue(0.0001)
//.saturate(1.001)
.layer(
  src(o0)
  .diff(src(o0)
    .scrollX(()=>(Math.sin(time/3)/10 ))
    .mask(o0)
  .scale(()=>1+(Math.sin(time/3)/2))
))
//.luma()
.scale(0.91, 1.1, 1.1, 0.7, 0.5)
.rotate([0.001, -0.001, 0.001, 0, -0.001].fast(0.1))
.out(o1)

render(o1)
