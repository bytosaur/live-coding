// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// Hydra by Olivia Jack
// https://github.com/hydra-synth/hydra-synth

a.show()

// Effects

bpm=20

//heart
heart = () => shape(3)
	.color(0.6,0.4,0.1)
  	.add(shape(99).scroll(-0.125,0.2))
	.add(shape(99).scroll(0.125,0.2))
	.color(() => a.fft[2]*2,0.5,.6)
	.pixelate(50,50)
	.scale(0.8,1.1,1.4)
	.modulate(osc().rotate(Math.PI/2),0.01)
  	.rotate(1,1)
  	.repeat()	
	.luma(0.1)
//   .out(o0)


render(o0)


// $$$ OBJECTS $$$ \\

// triforce
triforce = () => shape(3, 0.4, 0)
	.color(1, 1, 0)
	.rotate(Math.PI)
	.sub(shape(3, 0.2))
	// .scale(() => 2 * Math.exp(time % 8 / 8) - 1)

// sun
sun = () => shape(99, 0.2, 0).color(1, 0.6, 0.4)

sun_and_moon = () =>
    solid()
    .layer(
      shape(99).scale(1,1)  // sun
      .mask(gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(Math.sin(time)/6))
          .scrollY(()=>(Math.cos(time)/6))
            .r()
      )
    .layer(
      shape(99).scale(1,1).mask(shape(99).scrollX(0.05).invert()) // moon
      .mask( gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(-Math.sin(time)/6))
          .scrollY(()=>(-Math.cos(time)/6))
            .r()
      )

// palm
palm = () => new Array(4).fill().reduce((a,b)=> (
        a.layer(shape(3).r().scale(0.2,1)
                .rotate(Math.random(),1))), solid())
      .scale(1.5).scrollY(0.27).color(0,1,1)	// leafs
      .add(osc(100,0.03,1).rotate(-Math.PI/2).mask(  // trunk
              shape(4).scale(0.2,8).rotate(Math.PI/2)))
.luma()

// birds
birds = () => new Array(4).fill().reduce(
  (a,b,i)=>(
        a.layer(
          solid()
          .layer(shape(4,0.06).scale(1,0.8,0.1).scrollX( 0.025).modulateRotate(shape(99, 0.4,11), ()=>Math.sin(time+i)).r())
          .layer(shape(4,0.06).scale(1,0.8,0.1).scrollX(-0.025).modulateRotate(shape(99, 0.4,11), ()=>Math.sin(-time+i)).r())
          .layer(shape(99,0.015,0).r())
          .scale(1, 1+1/(4-i), 1+1/(4-i))
          .scroll(()=>Math.sin(time+i)/80*(i+1),  ()=>Math.cos(time/3)/40*(i+1)+0.2)
          .scroll(Math.random()/10, Math.random()/10)
          .r()
        )
  ), solid()
)


// $$$ FLOORS $$$ \\

water = () => solid(0.3,0.3,1)
  .mult(gradient())
  .layer(solid()
    .layer(shape(4).scale(1,0.3,10).r())
    .layer(shape(4).scale(1,0.3,10).rotate(Math.PI/2).r())
    .repeat(4,4)
    .scroll(0.02,0)
  	.color(0.2,0.2,0.2)
    .r()
   )
  .layer(solid()
    .layer(shape(4).scale(1,0.2,10).r())
    .layer(shape(4).scale(1,0.2,10).rotate(Math.PI/2).r())
    .repeat(4,4)
    .r()
   )
  .modulate(noise(5,0.1), 0.1)
  .scrollY(()=>(Math.sin(time))/40)
  .modulateScale(gradient().g().brightness(-1))
  .scrollY(0.5)
  .mask(gradient().g().thresh(0.5,0))

// test

// $$$ BACKGROUNDS $$$ \\

back_colo = () => osc(3,0,0.4).colorama([0.97,1].ease().fast(0.15)).rotate(Math.PI/2)


back_colo()
	.layer(sun_and_moon().color(1,0.1, 0).colorama().luma(0.01))
	.layer(water().modulate(osc(10,0.1).rotate(Math.PI/2),0.04))
	.layer(birds().color(()=>(a.fft[0]), ()=>(a.fft[0])).luma(0.1).scrollY(-0.2).scale(3))
	.modulate(triforce().scale([0.1,2].smooth()))
	.layer(palm().modulateRotate(noise(), 0.1).repeat(2,1).color(()=>(a.fft[0])*2,1,1).scale(1.5).scrollY(-0.1))
//	.layer(heart())
	.out(o1)

render(o3)


// buffer freeze
src(o2)
.scrollX(0.001)
//.blend(src(o1).colorama(()=>(cc[2])),()=>(cc[1]))
.blend(src(o1).colorama(0.9), 0.2)
.hue(0.005)
.modulate(o2, [0.001, -0.003])
.out(o2)

solid().out()

// 3d effect
src(o3)
.scale(1, 1.001, 1.002)
.layer(
  src(o2)
  .luma(0.3,0.11)
  )
.out(o3)

render()