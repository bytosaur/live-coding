


bpm=10
osc(20,0.01,0)
.thresh()
.color(0.3,0.7,1)
.modulate(osc(5,0.2,1).rotate(1, 0.25) ,0.3)
.add(
  shape([1.3, 4, 2.8],0.24,0.00001)
  .rotate(1,0.2)
  .scrollX([0.1,0.3].smooth())
  //.repeat([1.5, -1, 2.], [0.8, 0.7, 1.2])
  .color(0.7,0.7,1)
  //.modulate(osc(5,0.32,1).rotate(1, 0.99) ,0.5)
)
.luma()
.out()

src(o1)
.scale(1.003)
.color(1.01,1.01)
//.rotate(0.01)
.layer(o0)
.out(o1)

src(o3)
.scale(0.998)
.color(0.,0.993,0.993)
//.rotate(0.01)
.layer(src(o1).mask(src(o0).thresh().invert()))
.out(o3)

noise(1,10)
.pixelate(1,1)
.thresh()
.layer(src(o1).luma(0.1))
.out(o2)

render(o3)
