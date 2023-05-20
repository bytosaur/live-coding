
// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// recursion studies by Paul Henri

// Hydra - github.com/ojack/hydra

bpm = 120 / 4
speed = 0.25

shape([1.5, 2.3, 3.2, 3.7], 0.2, 0.000001)
.modulate(voronoi())
.color(0.7, 0.3, 1)
.rotate(1, 0.05)
.repeat(0.7,2)
.luma(0.01)
.scale(()=>(a.fft[0]+0.5))
.out(o0)

// white with trail
src(o0)
.add(
  src(o1)
  .scale([1.01, 1, -0.99, 1, 1])
  .scrollX([.001, 0, 0, -.002])
  .scrollY([.003, -.01, 0.01])
  .mult(
    src(o1).color(0.2, 0.6, 0.9),
    () => (Math.sin(time/10)+1.2)/8 )
)
.luma(0.01)
//.layer(o0)
.out(o1)


// diff global
src(o1)
.diff(
  src(o2)
  .scrollX([.001, 0, 0, -.002].offset(0.5))
  .scrollY([0, -0.002, .001])
)
.rotate(0.000001)
.luma(0.2)
.out(o2)

//
src(o1)
.color(0.9, 0.9, 0.9)
.scrollX([.1, -.02])
.saturate(1.8)
.layer(o0)
.luma(0.1)
.out(o1)

//
src(o2)
.scrollX([.001, 0, 0, -.002].offset(0.5))
.scrollY([0, -0.002, .001])
.layer(o1)
.rotate([0.001,-0.0007, 0])
.luma(0.2)
.out(o2)

solid()
.color(1,1,1)
.diff(src(o2).saturate(2))
.out(o3)

render(o3)


render(o2)
