











speed = 0.5

await loadScript("https://hydra-extensions.glitch.me/hydra-text.js")

hydraText.font = "sans-serif"
hydraText.lineWidth = "2%"
str = `Isle of Coding`

// palm
k = new Array(10).fill().reduce((a,b)=> (a.layer(shape(3).r().scale(0.2,1)
     .rotate(Math.random(),1))), solid())
  .scale(1.5).scrollY(0.27).color(0,1,1)	// leafs
  .add(osc(100,0.03,1).rotate(-Math.PI/2).mask(  // trunk
	shape(4).scale(0.2,8).rotate(Math.PI/2))
      )
  .luma()
.out()



// background
gradient()
.layer(text(str).scrollY(0.13).modulateScale(shape(99,0.2,1).invert(),1).scale(0.5))
  .layer(
    shape(99).scale(1,1)  // sun
	.mask(gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
      .scrollX(()=>(Math.sin(time)/3))
      .scrollY(()=>(Math.cos(time)/3))
         .r()
    )
  .layer(
  	shape(99).scale(1,1).mask(shape(99).scrollX(0.2).invert()) // moon
 	.mask( gradient().rotate(Math.PI).pixelate(1,8).thresh(0.4,0.2))
      .scrollX(()=>(-Math.sin(time)/3))
      .scrollY(()=>(-Math.cos(time)/3))
         .r()
    )
//.color(1,0,-1)
.colorama(()=>(Math.sin(time)+1)/10)
.layer(
  	gradient(2)
  	//.diff(shape(4,0.2).scale(1, 8).repeat(9,9).kaleid(20))
  	.diff(shape(4,0.2).scale(8, .1).repeat(10,1)
  		.layer(shape(4,0.2).scale(1, 8).repeat(1,10).r())
    .scrollY(()=>(-time))
  	.modulateScale(gradient().brightness(-0.9).g(),1).scrollY(0.6))
  	.mask(gradient().rotate(Math.PI).g().thresh(0.5,0).invert())
)
// palms
.layer(
  	src(o0)
  	.scale(1.2)
  	.repeat(2,2)
  .luma()
  //.scrollY(-0.15)
)
.invert([0,1])
.out(o1)



render(o1)

