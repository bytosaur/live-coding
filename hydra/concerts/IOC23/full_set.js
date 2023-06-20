
// $$$ SKY $$$ \\

cloud0_o = () => new Array(20).fill().reduce(
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
 .out()


cloud1_o = (o) => new Array(30).fill().reduce(
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

render()





// Effects

// buffer freeze
src(o0)
.scrollX(0.001)
.modulate(o0, [0.001, -0.003])
.out(o0)
