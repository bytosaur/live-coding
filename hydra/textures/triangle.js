shape(3, 0.2, 1e-6)
.diff(shape(3, 0.15, 1e-6))
.mask(shape(3, 0.2, 1e-6).rotate(Math.PI/3).invert())
.mask(shape(99, 0.37, 1e-6))
.color(0.7, 1, 0.3).scale(()=>(a.fft[0])*3)
.luma()
.out()

shape(99).out()

a.show()

render(o0)

hush()
