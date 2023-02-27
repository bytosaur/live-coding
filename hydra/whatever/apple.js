var k = 8
var d = Math.PI/k
shape(2,d,0).scrollY(d/2).rotate(Math.atan2(d,1))
  .scrollY(-d/2-.5)
  .mask(shape(1,0,0).invert().rotate(Math.PI/4)) 
  .kaleid()
  .out()

solid()
.add(src(o0).color(1,0,0))
.diff(src(o0).color(0,1,0.5).invert().rotate(Math.PI/8))
.out(o1)


src(o1)
.mask(shape(99))
.modulateRotate(shape(99, 0.2, 0.3), 3)
.rotate(0.2, -0.5)
.out(o2)

shape(1,0,0).invert().rotate(Math.PI/4).out(o3)

render()
