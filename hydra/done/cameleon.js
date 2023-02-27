
shape(()=>(Math.sin(time)+7)/2, 0.2, 0.01)
.color(0.3, 0.7, 1)
.modulate(osc(10,0.1))
.scrollX( ()=>(Math.sin(time/2)/8)  )
.scrollX( ()=>(Math.sin(time/3)/10) )
.out()


src(o1)
//.color(1, 0.3, 0.7)
.scrollX( ()=>(Math.cos(time/7)/900)
    + (Math.sin(time/3)/2000) )
.scrollY( ()=>(Math.sin(time/9)/900)
    + (Math.cos(time/3)/3000)  )
.hue(0.0007)
.layer(
  src(o0).diff(src(o0)
  .scale(()=>1+(Math.sin(time/3)/2))
  .scrollX(()=>(Math.sin(time/3)/10 ))
  .mask(o0)).luma())
.scale(0.91, 1.1, 1.1, 0.7, 0.5)
.rotate([0.001, 0, -0.001, -0.0001, 0, 0.0003].fast(1))
.out(o1)

solid().out(o1)

render(o1)
