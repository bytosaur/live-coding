
new Array(20).fill().reduce(
	(a,b,i) => (
      a.layer(
        shape(99, Math.random()/10 + 0.02, 0.02)
        .scroll(Math.random()/10+Math.random()/5*(i%3),
              	Math.random()/30+Math.random()/20*(i%3) + 0.2)
        .r()
      )
    ), solid())
 .modulate(noise(10).g(),0.05).pixelate(64,64)
 .scrollX(()=>(time)/40)
 .out()

 new Array(30).fill().reduce(
 	(a,b,i) => (
       a.layer(
         shape(99, Math.random()/15 + 0.02, 0.000001)
         .scroll((i%3)/3 + 0.25,	0.05)
				 .scroll(Math.random()/4, Math.random()/20)
        // .scroll(Math.random()/10+Math.random()/5*(i%3),
        //       	Math.random()/30+Math.random()/20*(i%3))
         .r()
       )
     ), solid())
  .scrollX(()=>(time)/40)
	.out()


	solid()
	.layer(
		solid(0.3,0.3,1)
		.layer(src(o0).r().scrollX(Math.random()).scale(2).scrollY(0.2))
		.layer(src(o0).r().scrollX(Math.random()).scale(1.5).scrollY(0.1))
		.layer(src(o0).r().scrollX(Math.random()))
		.mask(gradient().g().invert().thresh(0.5,0))
	)
	.out(o1)

	solid(0.3,0.3,1)
	.layer(src(o0).r().scrollX(Math.random()).scale(1.5))
	.layer(src(o0).r().scrollX(Math.random()))
	.layer(src(o0).r().scrollX(Math.random()).scale(0.7))
	.layer(src(o0).r().scrollX(Math.random()).scale(0.45))
	.mask(gradient().g().invert().thresh(0.5,0))
	.out(o1)

render(o1)

// update = () => ((time % 2 < 0.01) ? K() : null)
update = 0
