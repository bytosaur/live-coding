// hey everyone !!!
// lets goo :)



osc(10)
.color(-1,()=>(a.fft[0]))
.scale(()=>(a.fft[0]+1))
.mask(
  shape([2.4, 3.8, 3.2], 0.4)
  .diff(
    shape([2.4, 3.8, 3.2], 0.3)
    .scrollX(0.05)
  )
  .modulate(
    src(o0)
    .scrollX([0.02, -0.2, 0.07])
  )
  .modulate(noise(1, 0.4).pixelate(8,2))
)
// .scale(1, 1.1, 1.1, ()=>(time))
.scrollY(()=>(time/100))
.out()

src(o0)
// .saturate(1.1)
.add(
  src(o1)
  .scrollY(0.03)
  .scrollX([0.01, -0.001, 0.003])
)
.layer(o0)
.out(o1)

src(o1)
// .kaleid(()=>(Math.sin(time/1000)))
.out(o2)

render()
