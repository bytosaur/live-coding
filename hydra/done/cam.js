
s0.initCam()

src(s0)
.contrast(1)
.saturate([4,10].ease())
.luma()
.out(o3)

src(o1)
.layer(o3)
//.scale(1.001)
.hue(0.001)
.modulate(o1, -0.001)
.out(o1)
