// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter

osc(10,0.5,3).mult(shape(4)).out()
src(o0).rotate (0.004).out()

//2


a.show()
a.setBins(8)
a.setSmooth(0.2)
a.setScale(10)
a.setCutoff(0.4)


osc(30,0.01,1).mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7)).posterize([3,10,2].fast(0.5).smooth(1)).modulateRotate(o0,() => a.fft[0]).out()


//Referencia 2

osc(15, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4,1), 20)).color(0,2.4,5).saturate(0.4).luma(1,0.1, (6, ()=> 1 + a.fft[3])).scale(0.7, ()=> 0.7 + a.fft[3]).diff(o0)// o0
.out(o0)// o1



//Referencia 3

osc(13,0,1)
  .kaleid(4)
  .mask(shape(4,() => a.fft[0],1))
 .mask(shape(4,() => a.fft[0]*2,1))
  .modulateRotate(shape(4,0.1,1))
  .modulateRotate(shape(4,0.1,0.9))
  .modulateRotate(shape(4,0.1,0.8))
  .scale(0.3)
  .add(shape(4,0.2,1).color(0.3,1,1,0.5))
  .rotate(()=>time)
  .out()

osc(15, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4,1), 20)).color(0,2.4,5).saturate(0.4).luma(1,0.1, (6, ()=> 1 + a.fft[3])).scale(0.7, ()=> 0.7 + a.fft[3]).diff(o0)// o0
.out(o0)// o1

