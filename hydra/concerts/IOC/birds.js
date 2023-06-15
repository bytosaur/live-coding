new Array(4).fill().reduce(
    (a,b,i)=>(
          a.layer(
            solid()
            .layer(shape(4,0.1).scale(1,0.8,0.1).scrollX(0.05).modulateRotate(shape(99,0.4,11), ()=>Math.sin(time+i)).r())
            .layer(shape(4,0.1).scale(1,0.8,0.1).scrollX(-0.05).modulateRotate(shape(99,0.4,11), ()=>Math.sin(-time+i)).r())
            .layer(shape(99,0.02).r())
            .scale(1, 1+1/(4-i), 1+1/(4-i))
            .scroll(()=>Math.sin(time+i)/30*(i+1),  ()=>Math.cos(time/3)/14*(i+1))
            .scroll(Math.random()/10, Math.random()/10)
            .r()
          )
    ), solid()
).out()