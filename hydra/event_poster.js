






// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// recursion studies by Paul Henri

// Hydra - github.com/ojack/hydra

bpm = 120 / 30

shape([1.5, 2.3, 3.2, 3.7])
.modulate(o0)
.color(0.7, 0.3, 1)
.rotate(()=>(time / 100))
.repeat(0.7,2)
.out(o0)

src(o0)
.add(
  src(o1)
  .scale([1.01, 1, -0.99, 1, 1])Ó
  .scrollX([.001, 0, 0, -.002])
  .scrollY([.003, -.01, 0.01])
  .mult(
    src(o1).color(0.2, 0.6, 0.9),
    () => (Math.sin(time/10)+1)/2 )
)
.out(o1)

src(o1)
.diff(
  src(o2)
  .scrollX([.001, 0, 0, -.002])
  .scrollY([0, -0.002, .001])
)
.rotate(()=>(0.003))
.out(o2)


render(o2)
