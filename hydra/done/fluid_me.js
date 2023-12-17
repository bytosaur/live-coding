// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// fluid me
// paul henri
// https://hydra.ojack.xyz/?sketch_id=nD4onBV9a1Pn1zt5

s0.initCam()

src(o0)
.color(0.999,0.999,0.999)
.rotate(-0.002)
.hue(0.001)
.modulate(
  src(o0)
  .scale(1.14)
  .brightness(-0.25)
  ,0.002)
.layer(src(s0).luma(0.5))
.out(o0)
