

gradient()
.mask(o0)
.out(o1)

render(o0)

// noise([1,3,2.3,1.7],0)
// .pixelate([5,10],[3,35,7])
// .modulate(o0,1.7)
// .mult(noise([1,7,0.3,90],[0,0.02,0.1]).pixelate([60,19],[3,12,14]))
// .modulate(o0,0.3)
// .thresh(0.1,0)
// .out(o0)



k = ()=> (
noise([1,3,2.3,1.7],0).pixelate([5,10],[3,35,7])
.thresh(0,0)
.modulate(o0,1.7)
.mult(noise([1,7,0.3,90],[0,0.02,0.1]).pixelate([60,19],[3,12,14]).brightness(0.5).thresh(0.5,0))
.modulate(o0,0.3)
.thresh(0.1,0)
)



src(o3).layer(
    osc().mask(o0)
).out(o3)
render(o0)