
osc(10,0.1,Math.PI/2)
.colorama()
.layer(src(o0).luma(()=>(Math.sin(time/2)/10)+0.1))
.hue(0.002)
.contrast(1.01)
.modulateHue(src(o1),[0.6,1,1,2,3,1].smooth()).out(o0)

osc([1,2,4].fast(0.2),0.2,2)
.rotate(Math.PI/2)
.modulateRotate(src(o0),[0.01,0.1,1,10].offset(0.4).ease())
.out(o1)