osc(10, () => (a.fft[0] * 4))
.out(o0)

voronoi(1,2)
.out(o1)

// camera
s0.initCam() // initialize a webcam in source buffer s0
src(s0).out() // render source buffer s0
