
new Array(4).fill().reduce(
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
).out(o2)

new Array(20).fill().reduce(
	(a,b,i) => (
      a.layer(
        shape(99, Math.random()/10 + 0.02, 0.00002)
        .scroll(Math.random()/10+Math.random()/5*(i%3),
              	Math.random()/30+Math.random()/20*(i%3))
        .r()
      )
    ), solid())
 .out(o2)

k()

osc(3,0,0.3)
.colorama(1)
.rotate(Math.PI/2)
.layer(
	src(o2).luma().scale(0.8).scrollY(0.3)
	.layer(src(o2).luma().scale(0.7).scrollY(0.3))
	.layer(src(o2).luma().scale(0.9).scrollY(0.3))
  	
)
.layer(src(o0).luma().scale(0.9).color(0,0,0))
.out(o1)

render(o1)