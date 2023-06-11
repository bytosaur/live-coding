
// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// recursion studies by Paul Henri

// Hydra - github.com/ojack/hydra

bpm = 120 / 4
speed = 0.5

shape([1.5, 2.3, 3.2, 3.7])
.color(0.7, 0.3, 1)
.rotate(1, 0.05)
.repeat(1, 0.2)
//.luma(0.01)
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
    () => (Math.sin(time/10)+1.2)/1 )
)
.out(o1)

//
src(o1)
.color(0.9, 0.9, 0.9)
.scrollX([.1, -.02])
.saturate(1.8)
.layer(o0)
.out(o1)

src(o1)
.diff(
  src(o2)
  .scrollX([.0005, 0, 0, -.0002].offset(0.5))
  .scrollY([1, -0.0008, .0001])
)
.rotate(0.0008)
.out(o2)


render()
