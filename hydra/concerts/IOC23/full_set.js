// $$$ OBJECTS $$$ \\

// triforce
var triforce = () => shape(3, 0.4, 0)
	.color(1, 1, 0)
	.rotate(Math.PI)
	.sub(shape(3, 0.2))
	// .scale(() => 2 * Math.exp(time % 8 / 8) - 1)

// sun
var sun = () => shape(99, 0.2, 0).color(1, 0.6, 0.4)

var sun_and_moon = () =>  
    solid()
    .layer(
      shape(99).scale(1,1)  // sun
      .mask(gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(Math.sin(time)/3))
          .scrollY(()=>(Math.cos(time)/3))
            .r()
      )
    .layer(
      shape(99).scale(1,1).mask(shape(99).scrollX(0.05).invert()) // moon
      .mask( gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
          .scrollX(()=>(-Math.sin(time)/3))
          .scrollY(()=>(-Math.cos(time)/3))
            .r()
      )

// palm
var palm = () => new Array(10).fill().reduce((a,b)=> (
        a.layer(shape(3).r().scale(0.2,1)
                .rotate(Math.random(),1))), solid())
      .scale(1.5).scrollY(0.27).color(0,1,1)	// leafs
      .add(osc(100,0.03,1).rotate(-Math.PI/2).mask(  // trunk
              shape(4).scale(0.2,8).rotate(Math.PI/2)))
.luma()

// birds
var birds = () => new Array(4).fill().reduce(
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

// clouds
var cloud0_o = (o) => new Array(20).fill().reduce(
	(a,b,i) => (
      a.layer(
        shape(99, Math.random()/8 + 0.02, 0.000002)
        .scroll(Math.random()/10+Math.random()/5*(i%3),
              	Math.random()/30+Math.random()/20*(i%3) + 0.2)
        .r()
      )
    ), solid())
  .modulate(noise(10).color(1,0), 0.02)
  .scrollX(()=>(time)/40)
  .r()
  //.mult(osc(1,0.2,2)).colorama()
 .out(o)

var cloud1_o = (o) => new Array(30).fill().reduce(
 	(a,b,i) => (
       a.layer(
         shape(99, Math.random()/15 + 0.02, 0.000001)
         .scroll((i%3)/3 + 0.25,	0.22)
				 .scroll(Math.random()/4, Math.random()/20)
        // .scroll(Math.random()/10+Math.random()/5*(i%3),
        //       	Math.random()/30+Math.random()/20*(i%3))
         .r()
       )
     ), solid())
  	.scrollX(()=>(time)/40)
	.r()
	//.mult(osc(1,0.2,2)).colorama()
.out(o)


// $$$ FLOORS $$$ \\

var floor = () => gradient(1)
  	.diff(shape(4,0.2).scale(8, .1).repeat(10,1)
  		.layer(shape(4,0.2).scale(1, 8).repeat(1,10).r())
    .scrollY(()=>(-time/2))
  	.modulateScale(gradient().brightness(-0.9).g()).scrollY(0.6))
  	.mask(gradient().rotate(Math.PI).g().thresh(0.5,0).invert())


var water = () => solid(0.3,0.3,1)
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
  //.add(gradient().g().brightness(-1),-0.9)
  .mask(gradient().g().thresh(0.55,0))

water().out()


// $$$ BACKGROUNDS $$$ \\

back_grad = () => gradient().g().invert().color(1,0.6,0.6).brightness(0.3)

back_colo = () => osc(3,0,0.4).colorama([0.97,1].ease().fast(0.15)).rotate(Math.PI/2)

back_colo2 = () => gradient().colorama(()=>(Math.sin(time)+1)/10)



// $$$ SKYS $$$ \\


sky_clouds_i = (i) => solid(0.3,0.3,1)
  .layer(src(i).scrollX(Math.random()).scale(2).scrollY(0.2))
  .layer(src(i).scrollX(Math.random()).scale(1.5).scrollY(0.1))
  .layer(src(i).scrollX(Math.random()))
  //.layer(src(o0).scrollX(Math.random()).scale(0.25).scrollY())
  .mask(gradient().g().invert().thresh(0.5,0))


sky_storm_i = (i) => solid(0.3,0.3,1)
  .layer(noise(100,10).thresh(0.7,0).pixelate(1,1).r())
  .layer(src(i).scrollX(Math.random()).scale(1.5))
  .layer(src(i).scrollX(Math.random()))
  .layer(src(i).scrollX(Math.random()).scale(0.7))
  .layer(src(i).scrollX(Math.random()).scale(0.45).scrollY(-0.05))
  .mask(gradient().g().invert().thresh(0.5,0))
  .pixelate(64,64)
  .brightness(-0.5)


// writes to o0
cloud0_o(o1)

cloud1_o(o0)

// reads o0 writes to o1
sky_clouds_i(o0).out(o1)

sky_storm_i(o0).out(o1)





// Effects

// buffer freeze
src(o0)
.scrollX(0.001)
.modulate(o0, [0.001, -0.003])
.out(o0)


// 3d effect
src(o3)
.scale(0.99)
.layer(
  src(o1)
  .luma()
  )
.out(o3)
