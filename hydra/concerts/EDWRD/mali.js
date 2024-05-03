// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// IG @__m4ln 

////////////////////////////////////////////////////////
inp1 = () => noise(1,0.1)
strob = () => osc(1,1).pixelate(1,1).thresh().out()
star = () => shape(3).add(shape(3).rotate(1))
speed = 0.9

setResolution(1080,720) 

////////////////////////////////////////////////////////
shape(99,0.1,0.9).color(0.1,0.9,[0.1,0.5,10].smooth())
   	.mask(osc(10,0.2,0).luma(0.1,1))
	.modulateRotate(shape(99,0.2,1))
	.colorama(0.1)
	.saturate(-1)
	.modulate(noise(100))
	.scale([0.5,1].smooth())
	.scrollX([0.1,0.5,2.5])
  	.out(o0)

///////////////////////////////////////////////////////
s1.initImage('https://live.staticflickr.com/296/32104226746_6b985b48bf_b.jpg')
src(s1)
	.contrast(1.5)
	.saturate([-10,2,10].smooth())
	.modulate(voronoi(10),0.01)
	.rotate([1,2,5].smooth())
	.scale([1,5].smooth())
	.modulateScale(osc(),0.1)
  	.out(o1)

///////////////////////////////////////////////////////
src(o0)
 	.modulateScale(src(o1),0.0001)
  	.luma(0.5)
	.layer(src(o1).luma(0.5,0.1))
	.out(o0)

///////////////////////////////////////////////////////
s0.initCam(0)
src(o0)
  	.layer(src(s0).luma([0.5,0.1,2].smooth(),0.01))
//   	.modulateScrollX(inp1(),0.001)
  	.mask(shape(4,0.5,0.4),0.3)
  	.colorama(0.1)
  	.out(o3)
render(o3)

///////////////////////////////////////////////////////
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Hydra Glitchy Slit Scan
//Flor de Fuego
//https://flordefuego.github.io/ 
s0.initCam(0)
src(s0)
  .saturate([1,-1].smooth())
  .contrast(2.0)
  .layer(src(o0)
         .mask(shape(4,2)
               .scale(0.5,0.7)
               .scrollX(0.25))
         .scrollX(0.001))
  .modulate(o0,0.001)
  .out(o0)
render(o0)


