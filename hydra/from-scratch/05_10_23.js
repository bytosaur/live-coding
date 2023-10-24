

bpm=10

const f=()=>noise([1,10,1].fast(0.1).smooth(),[0,0.06])
f()
.mult(f())
.contrast(20)
.luma(0.2,0.2)
//.rotate(0.1,.1)
.out()


const p5 = new P5();
p5.clear();
var x,y;
p5.draw = () => {
  p5.background(220)
  p5.fill(p5.mouseX/5, p5.mouseY/5, 255, 100)
  p5.rect(p5.mouseX, p5.mouseY, 30, 150)
}
s0.init({src: p5.canvas});
src(o0).repeat().out()


const p5 = new P5()
 // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}
p5.rect(300, 100, 100, 100)
p5.clear()
for(var i = 0; i < 100; i++){
  p5.fill(i*10, i%30, 255)
  p5.rect(i*20, 200, 10,200)
}
p5.draw = () => {
  p5.fill(p5.mouseX/5, p5.mouseY/5, 255, 100)
  p5.rect(p5.mouseX, p5.mouseY, 30, 150)
}
s0.init({src: p5.canvas})
src(s0).out()
