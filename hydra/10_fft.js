a.show()

a0 = () => (a.fft[0])
a1 = () => (a.fft[1])
a2 = () => (a.fft[2])
a3 = () => (a.fft[3])


shape(0)
.add(
  shape(4)
  .scale(a0)
  .scrollX(10)
)
.out()

solid().out()
