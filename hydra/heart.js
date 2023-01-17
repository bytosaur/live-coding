// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// pixel heart by Paul Henri

// Hydra by Olivia Jack
// https://github.com/hydra-synth/hydra-synth

// pixel heart
shape(3)
.add(shape(100).scrollY(0.21).scrollX(.125))
.add(shape(100).scrollY(0.21).scrollX(-.125))
.color(1,0,0).pixelate(26,16).scale(.8, 1.4)
.out(o0)

// trail
src(o0)
.add(
  src(o1)
  .blend(o0, .1)
  .scrollX(.01)
  .scrollY(-.01)
  .scale(.99)
  .hue(.05)
)
.out(o1)
