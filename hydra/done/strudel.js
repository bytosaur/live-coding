
setResolution(1920, 1080);
bpm=10
src(o0)
	.scale(1.002)
	.hue(-0.001)
	.brightness(-0.002)
	.layer(
  		osc(Math.PI*4, -0.001, 0.1)
		.modulate(src(o0)
			.thresh(0.38, 0.3)
			//.pixelate([1,1000].smooth(), [1000,1].smooth())
            .pixelate(1,1080)
         , 0.1)
		.modulate(osc(Math.PI/4, 0.01, 2).rotate(0,0.0002), [0.01,0.1].smooth())
		//.rotate([0.0001,-0.002])
		.sub(
          gradient(0.2)
          //.brightness(-.5)
        )
		.colorama(0.2)
		//.colorama(0.2)
		.luma(0.5))
	.out()
// .sub(gradient().r())


// next
setResolution(1920, 1080);
bpm=10
src(o0)
	.scale(1.001)
	.rotate(0.,0.000001)
	//.rotate(0.003)
	.hue(-0.001)
	.brightness(-0.002)
	.layer(
  		osc(Math.PI*4, -0.001, 0.1)
		.modulate(src(o0)
			.thresh(0.38, 0.3)
			//.pixelate([1,1000].smooth(), [1000,1].smooth())
            .pixelate(1,1080)
         , 0.1)
		.modulate(osc(Math.PI/4, 0.01, 2).rotate(0,0.0002), [0.01,0.1].smooth())
		//.rotate([0.0001,-0.002])
		.diff(gradient(0.2), 1)
		.colorama(0.2)
  		.kaleid(2)
  		.mask(shape(99,0.1,()=>(Math.sin(time)+1)/2))
  		.rotate(Math.PI/2)
		//.colorama(0.2)
		.luma(0.5)
    )
.out()
