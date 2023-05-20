

/// ===  TEXTURES ===
// glitchy shapes
shape([2,3,4,5], ()=>(Math.sin(time/10)+2)/9, 1e-6)
.rotate(1,0.1)
.color(.7, 1, ()=>(Math.sin(time/1)+2)/3 )
.modulate(src(o0).scrollX([0.0008, -0.001]))
.out(o0)

// Triangle
shape(3, 0.2, 1e-6)
.diff(shape(3, 0.15, 1e-6))
.mask(shape(3, 0.2, 1e-6).rotate(Math.PI/3).invert())
.mask(shape(99, 0.37, 1e-6))
.color(0.7, 1, 0.3).scale(()=>(a.fft[0])*3)
.luma()
.out()


/// === FILTERS ===

// modulate from inside to outside
src(o1)
.modulate(gradient().pixelate().brightness(-0.5), -0.01)
.layer(src(o0).luma(0.05))
.out(o1)

// modulatescroll up and down
src(o1)
.modulateScrollX(gradient().pixelate(2,2).brightness(-0.5), -0.01)
.layer(src(o0).luma(0.05))
.out(o1)

// RAVE self diff
src(o0)
.diff(
  src(o1)
  .scale([0.99,1,-0.99,1,1.01].fast(.2))
  .scrollX([0.001, 0.002, -0.003, 0, 0].fast(.2))
  .scrollY([0.001, -0.002])
)
.out(o1)

// LSD diffusion
src(o1)
//.color(1, 0.3, 0.7)
.scrollX( ()=>(Math.cos(time/7)/900)
    + (Math.sin(time/3)/2000) )
.scrollY( ()=>(Math.sin(time/9)/900)
    + (Math.cos(time/3)/3000)  )
.hue(0.0007)
.layer(
  src(o0).diff(src(o0)
  .scale(()=>1+(Math.sin(time/3)/2))
  .scrollX(()=>(Math.sin(time/3)/10 ))
  .mask(o0)).luma())
.scale(0.91, 1.1, 1.1, 0.7, 0.5)
.rotate(0.001)
.out(o1)

// lsd waterpaint
src(o1)
  .color(1,0.999,1)
  .scrollX(() => (Math.cos(time / 7) / 5000) +
    (Math.sin(time / 6) / 5000))
  .scrollY(() => (Math.sin(time / 9) / 2000) +
    (Math.cos(time / 6) / 5000))
  .hue(0.0006)
  .layer(src(o0)
    .add(src(o0)
        .scrollX(() => (Math.sin(time / 3) / 200))
        .scale(() => 1 + (Math.sin(time / 3) / 200))
        .mask(o0)
      )
  )
  //.luma()
  .scale(1, [-1.001, 1.001].fast(0.1), 1.005,
      [0.7, 0.22, 0.3].fast(0.2),
      [0.5, 0.3, 0.6].fast(0.2).offset(0.5))
  .rotate([0.001, -0.001, 0.0007, 0, -0.0007].fast(0.1))
  .out(o1)


render(o1)
