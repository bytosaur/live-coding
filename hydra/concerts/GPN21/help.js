
// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/


// SOME HELPERS WHEN IN NEED

bpm = 120 / 8
speed = 0.5

a.show()
a.setSmooth(0.9)
a.setBins(6)


/// ===  GEOMETRY ===

// glitchy shapes
shape([2,3,4,5], ()=>(Math.sin(time/10)+2)/9, 1e-6)
.rotate(1,0.1)
.color(.7, 1, ()=>(Math.sin(time/1)+2)/3 )
.modulate(src(o0).scrollX([0.0008, -0.001]))
.out(o0)

// jumping
shape(()=>(a.fft[0] > 0.3 ? 1.7 : 2.3)+1, 0.3)
.diff(shape([2.5, 1.7, 1.9]))
.scrollX([0.1, 0.3, 0.2, 0.7])
.modulate(o0, 0.2)
.mult(osc(1,1,2).pixelate(1,1))
.color([1, 0.2, 0],()=>(a.fft[1]*10), ()=>(cc[9]))
.out()

shape(()=>(a.fft[0] > 0.3 ? 1.7 : 2.3)+1, 0.3)
.modulate(o0, 0.2)
.mult(osc(1,1,2).pixelate(1,1))
.color([1, 0.2, 0],()=>(a.fft[1]*10), ()=>(cc[9]))
.repeat(1,()=>(cc[17])*10)
.out()

render(o0)

// TIL
shape([1.5, 0.4, 1.7, 0.7, 99], 0.1)
.color(0.1, ()=>(a.fft[0] > 0.1 ? 0.1 : 0.7), 1)
.rotate(1, [-1, 1.4, 1.2, 0.1, 0])
.repeat([1.4, 1.2, 2, -0.8], [0.4, 1.2, 0.8])
.scale(()=>(a.fft[0] < 0.3 ? 1.2 : 0.2))
.hue(()=>(Math.sin(time/3)/10))
.luma(()=>(a.fft[0] < 0.3 ? 0.01 : 0.9))
.out(o0)



/// FEEDBACK
render(o1)

// layered
src(o1)
.scrollX([.001, -.002])
.scrollY([.001, -.002])
.saturate(1.001)
//.modulate(o1, -0.01)
.scale(1.001)
//.modulate(voronoi(1).modulateKaleid(o1))
.layer(src(o0).luma())
.out(o1)

// added: white with trail
src(o0)
.add(
  src(o1)
  .scale([1.01, 1, -0.99, 1, 1].offset(0.5))
  .scrollX([.001, 0, -.002].smooth())
  // .scrollY([.03, -.01, 0.1])
  .mult(
    src(o1).color(0.2, 0.6, 0.9),
    () => (Math.sin(time/10)+1.2) / 0.1)
)
.color(0.9, 0.999, 0.999)
.out(o1)

render()

src(o1)
.diff(
  src(o2)
  .scrollX([.0005, 0, 0, -.0002].offset(0.5))
  .scrollY([1, -0.0008, .0001])
  .scale([1.001, -1.001, 1, 0.999, 0.99])
)
.rotate([0.001, .001, -0.002].offset(0.783294))
.layer(src(o0).luma())
.modulateRotate(o1, -0.001)
.out(o2)

osc(1,()=>(cc[1]*50)).pixelate([1],1).thresh()
.mult(osc(1,0.1,2).pixelate(1,1))
.brightness(()=>(cc[2]-0.5))
.mask(o0)
.scrollX(0.4)
.layer(
  src(o1)
  // .luma(()=>(cc[2]),0)    // <<== magic
  .luma(0.1,()=>(cc[2]))    // <<== magic
)
.out(o3)


render(o2)
