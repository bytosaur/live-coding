// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
src(o0)
	.thresh()
	.pixelate("asin(st.x)+cos(st.x)", "acos(st.y)+sin(st.y)")
	.posterize("asin(st.x)-cos(st.x)", "acos(st.y)-sin(st.y)")
	.shift("cos(st.x)-asin(st.x)", "sin(st.y)-acos(st.y)")
	.hue()
	.saturate(10)
	.brightness(.1)
	.contrast(3)
	.modulateScale(osc(Math.PI + Math.E))
	.layer(gradient(1)
		.r(3)
		.thresh("asin(st.x)+acos(st.y)")
		.mask(osc((Math.PI + Math.E) * 3)
			.rotate("sin(st.y)*cos(st.x)")
			.luma()))
	.scale(1, "st.y+st.y")
	.out()