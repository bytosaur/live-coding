
shape([2,3,4,5], ()=>(Math.sin(time/10)+2)/9, 1e-6)
.rotate( ()=>(time/10) )
.color(.7, 1, ()=>(Math.sin(time/1)+2)/3 )
.modulate(src(o0).scrollX([0.0008, -0.001]))
.out(o0)
