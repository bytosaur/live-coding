// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// pixel heart by Paul Henri

// Hydra by Olivia Jack
// https://github.com/hydra-synth/hydra-synth

bpm=20

// pixel heart
shape(3)
.add(shape(100).scrollY(0.21).scrollX(.125))
.add(shape(100).scrollY(0.21).scrollX(-.125))
.color(1,0,0).pixelate(26,16).scale(.8, 1.4)
  // play area
//.rotate(1,1)
//.repeat(()=>(Math.sin(time/2)/10)+1, 2)
//.colorama( ()=>(Math.sin(time/2)/10)+1 )
.luma(()=>(Math.sin(time/2)/10)+0.2)
.out(o0)

// trail
src(o1)
.scrollX(()=>(Math.cos(time/2)/100))
.scrollY(()=>(time%10 < 5 ? 0.01 : 0.2))
.scale(0.99)
.hue(.016)
.color(0.9, 0.99, 0.99)
.layer(o0)
.out(o1)

render(o1)
