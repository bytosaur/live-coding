


window.square = () => shape(4,0.3).scale(1,3,1)

square().rotate(Math.PI/2.3)
.mask(shape(4,0.3).scale(1,3,13).rotate(-Math.PI/2))
//.repeat(3,1)
.out()
