
s1 = () => shape(3,0.3,0).pixelate(59).r()
s2 = () => shape(99,0.3,0).pixelate(79).r()  
heart = () => s1()
	.layer(s2().scroll(0.12,0.25))
    .layer(s2().scroll(-0.12,0.25))
    .layer(s2().scroll(0.12,0.35))
    .layer(s2().scroll(-0.12,0.35))
    .layer(shape(4,0.1,0).scroll(-0.12,0.5).r())
	.layer(shape(4,0.1,0).scroll(0.12,0.5).r())
    .color(0.1,0.1,1).scrollY(-0.15)

heart().mask(noise(100,0.5).posterize(3,1).pixelate(512,512).modulate(noise(10),[-0.2,0.2].ease()).brightness([-1,1].ease())).out(o0)


solid(1,1,0).mask(noise(20,0.1).pixelate(128,128).thresh(0.9,0.1).posterize(16,1)).luma(0.01)
.layer(
heart().mask(noise(40,0.5).posterize(3,5).scrollY(()=>(-time/8))).luma(0.01)).out()
