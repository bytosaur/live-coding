a.show()
a.setBins(6)
a.setSmooth(0.92)

a.setCutoff(0)

speed=0.5
bpm=170/8.0


hush()

s0.initCam()

/// ====  glitch juice ==== ///
src(o0)
// .scale(1.001,1,1,0.5,0.5)
// .color(0.999,0.999)
.modulate(src(o0),0.00005)
.hue(0.001)
.luma(0.23,0.02)
.rotate(()=>(cc[18]/100))
.layer(
  osc(1,0.00,1)
  .mask(noise(2,0.1).brightness(1).luma(1,0))
  .colorama(()=>(cc[17]))
  // .modulate(osc(10,0.01).rotate(Math.PI/2),0.3)
  .modulate(src(s0).thresh(),0.5)
  .saturate(0.25)
  .contrast(2)
  .modulate(noise(4,0.05),0.5)
  .color(()=>(a.fft[0]*2),()=>(a.fft[0]*2),1)
  .luma(()=>(cc[9]),0)
)
// .blend(o1,()=>(cc[25]))
.blend(o1,()=>(a.fft[0]-cc[26]))
.out()


/// ====  lava lamp ==== ///
// osc(6,0,1.8).mask(
  shape([2,5,99],0.5,0.00004).mask(
  // shape(4,0.5,0.0001).scale(1,0.9,2)
  solid(1,1,1)
  .sub(
    shape([2,5,1].offset(0.5),0.1,0.6)
    .scale(()=>(a.fft[0]*2))
    .mult(
      osc(20,0.1)
      .modulateScale(shape(99,0.2,0.2),4)
      .luma(0.2,1))
    )
)
.repeat()
//.diff(src(o2).mask(src(o0).invert()))
.diff(o2)
.sub(shape(99,0.1,0.04).mult(osc(6,0.1,0).luma(0.3)))
.colorama(()=>(cc[17]))
.scale([1,2])
.modulate(noise(1,0.1),0.2)
.saturate(0.8)
//.diff(shape(3).scale(()=>(a.fft[0]*3)))
.out(o3)

shape(3).scale(()=>(a.fft[0]*3)).out(o0)

bpm=123/8

render(o0)


src(o0)
// .layer(osc(10,0.02).luma(0.9).color(0,0,0))
.layer(src(o3).mask(src(o3).thresh(0.3,0).invert()))
.hue(0.001)
.rotate(0.001)
.modulate(o0,0.003)
.layer(src(o0).mask(noise(10,0.1).pixelate(10,30).scrollY(()=>(time/10))))
.out(o0)


/// ====  cam2 ==== ///
s0.initCam()

src(s0)
//.luma(() => (Math.sin(time) + 2) / 2)
.luma(()=>(1-a.fft[0]),0)
.saturate(1.2)
.diff(src(o0), 0.9)
.modulate(o0, 0.001)
.hue(0.001)
.rotate(() => (time / 1000000))
.saturate(1.05)
.out()

s0.initCam()

/// ====  wave ==== ///
osc(()=>(cc[11]*1000), 0.03, 0)
.rotate(()=>(Math.sin(time/1)/8)+0.7)
.modulateScale(osc(20, 0.01, 2), 0.2)
.modulateScale(osc(20), 0.1)
.modulateScale(osc(11).rotate(()=>(Math.sin(time/1)+3)/8), 0.5)
.thresh(0.2)
.color(0.7, 0, 1)
.luma(0.1)
.blend(o1,()=>(a.fft[0]*2-0.6))
.out(o2)

render(o0)


/// ==== inner loop ==== ///
osc(6,0.02,Math.PI/2)
.modulate(osc(10, 0).rotate(Math.PI/2),0.1)
.colorama(0.09)
.out()

src(o1)
//.layer(osc(6,0.02).thresh().luma(0.9).color(0,0,0))
.hue(0.001)
.rotate(-0.004)
.modulateHue(src(o1),-2)
.layer(src(o0).mask(src(o0).mult(o0).thresh(0.5,0).invert()))
.layer(src(o1)
       .mask(noise(100,0.08)
             .pixelate(3,1)
             .thresh(()=>(Math.sin(time)+1)/10,0)
             .modulate(o1,0.0))
      .scrollY(0.001)
      .rotate(0.004)
      .scale(1.001)
	    .contrast(1.02)
)
.out(o1)

render(o0)

/// ====  strobo ==== ///
osc(1, ()=>(cc[9]*30))
.thresh()
.pixelate(1,1)
.color(()=>(cc[10])).r()
.layer(src(o1).luma( ()=>(cc[10]) ))
.out(o3)

render(o3)


/// ==== TIL23 ==== ///
shape([2,3,4,5], ()=>(Math.sin(time/10)+2)/9, 1e-6)
.rotate(1,0.1)
.color(.7, 1, ()=>(Math.sin(time/1)+2)/3 )
.modulate(src(o0).scrollX([0.0008, -0.001]))
.out(o0)


src(o1)
//.color(1, 0.3, 0.7)
.scrollX( ()=>(Math.cos(time/7)/900)
    + (Math.sin(time/3)/2000) )
.scrollY( ()=>(Math.sin(time/9)/900)
    + (Math.cos(time/3)/3000)  )
.hue(0.0007)
.layer(
  src(o0)
  // .scale(()=>(a.fft[0]*2))
  .diff(src(o0)
  // .scale(()=>(a.fft[0]*2))
  .scale(()=>1+(Math.sin(time/3)/2))
  .scrollX(()=>(Math.sin(time/3)/10 ))
  .mask(o0)).luma())
.scale(0.91, 1.1, 1.1, 0.7, 0.5)
.rotate(0.001)
.colorama(()=>(cc[1]/1000))
.luma(0.1,0)
.out(o1)


shape([1.5, 2.3, 3.2, 3.7])
.color(0.7, 0.3, 1)
.rotate(1, 0.05)
.repeat(1, 0.2)
.luma(0.01,0)
.out(o1)

src(o0)
.add(
  src(o1)
  .scale([1.01, 1, -0.99, 1, 1])
  .scrollX([.001, 0, 0, -.002])
  .scrollY([.003, -.01, 0.01])
  .mult(
    src(o1).color(0.2, 0.6, 0.9),
    () => (Math.sin(time/10)+1.2)/1 )
)
.out(o0)

src(o1)
.color(0.9, 0.9, 0.9)
.scrollX([.01, -.002])
//.saturate(1.8)
.layer(src(o0).luma())
.out(o1)

src(o1)
.diff(
  src(o2)
  .scrollX([.0005, 0, 0, -.0002].offset(0.5))
  .scrollY([1, -0.0008, .0001])
)
.rotate(0.0008)
.out(o2)



/// ==== Screen Feedback ==== ///

()=>(Math.sin(time/2))

render(o0)


s0.initScreen()

shape(99,0.1,1).brightness(-0.2).scrollY(()=>(a.fft[0])).scrollX(()=>(a.fft[0]))
.out(o2)

gradient().g().kaleid().out(o2)

s0.initScreen()


src(s0)
// .modulate(noise(),0.02)
// .color(0.9)
// .hue(()=>(Math.sin(time/10)/10))
.scale(1, -1,-1)
.scale(0.99)
// .scale(1.1, -1.1,-1.2, -0.2,-0.2)
.modulateScale(o2,0.002)
.layer(src(s0).scale(-1).luma(0.9,0.02))
// .modulateScale(o0, 0.2)
// .rotate(0.01,0.1)
.rotate(0.042)
.scrollX(-0.002)
// .blend(o1, ()=>(cc[27]))
.blend(o3)
// .blend(o3)
.blend(o1, ()=>(a.fft[0] > cc[27] ? 0.8 : 0))
.saturate(1)
//.luma(0.1,0)
.contrast(1.0)
.out(o3)


render(o1)
