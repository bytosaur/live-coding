speed=1

setResolution(4000,2000)

src(o0)
.modulateRotate(noise(10).sub(gradient()),0.005)
.hue(-0.001)
.brightness(-0.001)
.scrollY(-0.002)
.layer(
  gradient().invert()
  .modulate(
    osc([2,4].smooth().fast(0.001),-0.3,2)
    .modulateRotate(o0,[0,10].smooth())
    .add(o0,20)
    .modulateScale(shape(99,0.2,[0.1,1].smooth().fast(0.2)))
  )
  .luma([0.3,0.6].smooth().fast(0.1),0.3)
  .contrast(()=>(Math.sin(time/1+1)+2)*1)
  .saturate(()=>(Math.sin(time/1)+3)*1)
  .scrollX([0.1,0.3].smooth().fast(0.02))
)
.out()


src(o0)
.modulateRotate(noise(1).sub(gradient()),0.001)
.scrollY(-0.0008)
.layer(
  gradient().invert()
  .modulate(
    osc([4,10].smooth().fast(0.01),-0.3)
    .modulateRotate(o0,[0,10].smooth())
    .add(o0,2)
  )
  .luma(0.4,0.2)
  .contrast(()=>(Math.sin(time+1)+2))
  .saturate(()=>(Math.sin(time)+1.5))
)
.out()