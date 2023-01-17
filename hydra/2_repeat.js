
shape(3)
.modulate(noise())
.out(o1)

noise(0.5, .1)
.scrollY(0.1, 0.31)
.scale(() => (Math.sin(time) + 2)/3,)
.repeat(3.2, 4.3)
.colorama(() => (Math.sin(time/5)+2)/2)
.out(o2)

shape(3)
.scale(() => (Math.sin(time) + 2)/3, 2)
.modulate(osc())
.modulateScrollX(osc(0.1, 5))
.repeat(0.7)
.diff(o2)
.kaleid(3.1)
.kaleid(2)
//.modulateRotate( () => (Math.sin(time) + 2)/3 )
.diff(o1)
.out(o0)



render(o0)
