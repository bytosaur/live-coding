
heart = () => shape(3,0.1,0)
.layer(shape(100,0.1).scroll(0.045,0.07).r())
.layer(shape(100,0.1).scroll(-0.045,0.07).r())
.thresh(0.4,0)
.r()
.color(1,0,0)
.pixelate(128,128)


rain = () =>
  shape(4,0.1)
  .repeat(2,1,Math.random()*3,Math.random()*3)
  .repeat(1,2,Math.random()*3,Math.random()*3)
  .repeat(2,1,Math.random()*3,Math.random()*3)
  .repeat(1,2,Math.random()*3,Math.random()*3)
  .repeat(3,3,Math.random()*3,Math.random()*3)
  .scrollY(()=>(-time/2))
  .r()
  .color(0.7,0.7,1)


water = () => solid(0.3,0.3,1)
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
  .mask(gradient().g().thresh(0.5,0))

// reads o0 writes to o1
sky_storm_i = (i) => solid(0.3,0.3,1)
  .layer(src(i).scrollX(Math.random()).scale(1.5))
  .layer(src(i).scrollX(Math.random()))
  .layer(src(i).scrollX(Math.random()).scale(0.7))
  .layer(src(i).scrollX(Math.random()).scale(0.45).scrollY(-0.05))
  .mask(gradient().g().invert().thresh(0.5,0))
  .pixelate(64,64)
  //.brightness(-0.5)

// clouds
cloud0_o = (o) => new Array(20).fill().reduce(
	(a,b,i) => (
      a.layer(
        shape(99, Math.random()/4 + 0.02, 0.02)
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

cloud0_o(0)

// palm
palm = () => new Array(10).fill().reduce((a,b)=> (
        a.layer(shape(3,0.1).r()
                .rotate(Math.random(), 0.3))), solid())
      .scale(1.5).scrollY(0.27).color(0.3,1,0.3)	// leafs
      .layer(osc(100,0.03,1).r().color(1,0.7,0.3).rotate(-Math.PI/2).mask(  // trunk
             shape(4).scale(0.2,8).rotate(Math.PI/2)))
.luma(0.1)

water()
  .layer(sky_storm_i(o0))
	.layer(shape(2,0.2).r().color(1,1,0.3).scrollY(-0.4))
	.layer(heart())
	.layer(rain())
.layer(palm().modulate(osc(1,1).modulate(osc(10,10).rotate(Math.PI/2)).mult(gradient().g().invert().scrollY(0.15)).color(1,0,0),0.2).scale(1.2,1.3,1).repeat(2,1).scrollY(-0.2))
  	.brightness(-0.4).pixelate(256,256)
  .layer(noise(100,10).thresh(0.7,0).pixelate(1,1).r()).out(o1)


render(o1)
