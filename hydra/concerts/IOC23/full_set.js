// licensed with CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/
// vapor wave collection
// paul henri

a.show()

// $$$ COLORS $$$
// orange: 1,0.6,0.4


// $$$ OBJECTS $$$ \\

// triforce
triforce = () => shape(3, 0.4, 0.001)
	.color(1, 1, 0)
	.rotate(Math.PI)
	.sub(shape(3, 0.2))
	// .scale(() => 2 * Math.exp(time % 8 / 8) - 1)

// heart
heart = () => shape(3)
  	.add(shape(99).scroll(-0.125,0.2))
	.add(shape(99).scroll(0.125,0.2))
	.scale(0.8,1.1,1.4)

// drink
fruit = () => shape(3).scroll(0.33,0.33).kaleid(8).mask(shape(99,0.5))

drink = () => fruit().scale(0.6).rotate(1,1).scroll(0.21,0.32)
  .layer(shape(3,0.25,0).scrollY(0.2).r())
  .layer(shape(4,0.4,0).scale(1,0.1,1).scrollY(-0.2).r())
  .layer(shape(3,0.1,0).scale(1,1,-1).scrollY(-0.4).r())

// sun and moon
sun_and_moon = (speed=0.4) =>
    solid()
    .layer(
      shape(99).scale(1,1)  // sun
      .mask(gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(Math.sin(time*speed)/3))
          .scrollY(()=>(Math.cos(time*speed)/3))
            .r()
      )
    .layer(
      shape(99).scale(1,1).mask(shape(99).scrollX(0.05).invert()) // moon
      .mask( gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(-Math.sin(time*speed)/3))
          .scrollY(()=>(-Math.cos(time*speed)/3))
            .r()
      )

// palm
palm = () => new Array(4).fill().reduce((a,b)=> (
        a.layer(shape(3).r().scale(0.2,1)
                .rotate(Math.random(),1))), solid())
      .scale(1.5).scrollY(0.27).color(0,1,1)	// leafs
      .add(osc(100,0.03,1).rotate(-Math.PI/2).mask(  // trunk
              shape(4).scale(0.2,8).rotate(Math.PI/2)))

palm().scale(1,3,1).repeat(4,1).out(o2)

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

grid = (size=0.9, repeat=4) => shape(4,size,0).repeat(repeat,repeat)

water = () => solid(0.3,0.3,1)
  .layer(grid(0.9, 8).scroll(0.02,0).color(0.2,0.2,0.2).r())
  .layer(grid(0.9, 8).invert().r())
  .modulate(noise(5,0.1), 0.1)
  .scrollY(()=>(Math.sin(time))/40)
  .modulateScale(gradient().brightness(-0.95).g(),1)
  .scrollY(0.6)
  .mask(gradient().g().thresh(0.5,0))

floor = (size=0.9, repeat=8, speed=0.2) =>
	grid(size, repeat, speed)
    .scrollY(()=>(-time*speed))
  	.modulateScale(gradient().brightness(-0.9).g(),1).scrollY(0.6)
  	.mask(gradient().g().thresh(0.5,0))

// $$$ BACKGROUNDS $$$ \\

back_colo = () => osc(3,0,0.4).colorama([0.97,1].ease().fast(0.15)).rotate(Math.PI/2)


// $$$ TESTING $$$ \\

back_colo()
	.layer(sun_and_moon().color(1,0.1, 0).colorama().luma(0.01))
	.layer(water().modulate(osc(10,0.1).rotate(Math.PI/2),0.04))
	.out(o1)

floor2()
//.layer(water().mask(osc().thresh()))
.layer(birds().scrollY(-0.25).modulate(noise(),0.02).mult(gradient()).colorama(2).scale(4).luma(0.2,0))
.out(o1)



// $$$ EFFECTS $$$

// buffer freeze
src(o2)
.scrollX(0.001)
//.blend(src(o1).colorama(()=>(cc[2])),()=>(cc[1]))
//.blend(src(o1).pixelate(180,200).colorama(2), 0.4)
.hue(0.005)
.luma(0.02,0)
.modulate(o2, [0.001, -0.003])
.out(o2)

render()

// 3d effect
src(o3)
.brightness(-0.001)
.rotate(0.002)
.scale(1, 1.001, 1.002)
.layer(
  floor().mask(drink())
  )
.out(o3)

render(o3)
