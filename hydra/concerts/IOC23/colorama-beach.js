// birds
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
).out()

osc(3,0,0.4)
.colorama([0.97,1].ease().fast(0.15))
.rotate(Math.PI/2)
.out(o1)
