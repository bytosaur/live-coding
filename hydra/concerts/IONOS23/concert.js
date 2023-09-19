



/// glitch juice
src(o0)
.scale(1.001,1,1,0.5,0.5)
.color(0.999,0.999)
.modulate(src(o0),0.0005)
.hue(0.001)
.luma(0.3,0.2)
.rotate(0.001)
.layer(
  osc(10,0.03,1)
  .mask(noise(2,0.1).brightness(1).luma(1,0))
  .colorama(0.2)
  .saturate(0.5)
  .modulate(noise(4,0.05),0.05)
  .luma(0.4,0)
)
.out()


// cam2

src(s0)
  .luma(() => (Math.sin(time) + 2) / 2)
  .saturate(10)
  .diff(src(o0), 0.9)
  .modulate(o0, 0.001)
  .hue(0.01)
  .rotate(() => (time / 1000000))
  .saturate(1.05)
  .out()


// lava lamp
  osc(6,0,1.8).mask( //shape(99,0.5,0.00004).mask(
    shape(4,0.5,0.0001).scale(1,0.9,2)
    .sub(
      shape(99,0.1,0.6)
      .mult(
        osc(20,0.1)
        .modulateScale(shape(99,0.2,0.2),4)
        .luma(0.2,1))
      )
  )
  //.sub(shape(99,0.1,0.04).mult(osc(6,0.1,0).luma()))
  .colorama(0.18)
  .saturate(0.8)
  .out()


// wave
osc(50, 0.03, 0)
  .rotate(()=>(Math.sin(time/1)/8)+0.7)
  .modulateScale(osc(20, 0.01, 2), 0.2)
  .modulateScale(osc(20), 0.1)
  .modulateScale(osc(11).rotate(()=>(Math.sin(time/1)+3)/8), 0.5)
  .thresh(0.2)
  .color(0.7, 0, 1)
  .luma(0.1)
  .out(o0)


// inner loop
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
