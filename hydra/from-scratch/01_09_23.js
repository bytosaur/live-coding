

src(o0).layer(
osc(10,0,2).mask(
shape(4,0.8)).luma(0.1))
//.pixelate(20,20)
.repeat()
.scale(()=>(Math.sin(time*3)/3)+2.4)
.scroll(()=>(time),()=>(time/1.3))
.colorama(()=>(Math.sin(time*3)+1)/2)
.kaleid()
.hue()
//.scroll(()=>(time))
.out()
