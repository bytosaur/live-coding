s0.initCam()
s1.initStream("iLovePaul")
pb.setName("iLoveMarlen")

gradient().thresh().pixelate(2,1).thresh().out(o0)

solid()
.layer(src(s1).mask(src(o0)))
.layer(src(s0).mask(src(o0).invert()))
.out(o2)

render(o2)
