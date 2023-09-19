// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// glitch juice
// paul henri
// https://hydra.ojack.xyz/?sketch_id=Pr16zeXkfaLUd5Kd

src(o0)
.scale(1.001,1,1,0.5,0.5)
.color(0.999,0.999)
.modulate(src(o0),0.0005)
.hue(0.001)
.luma(0.3,0.2)
.rotate(0.001)
.layer(
  osc(10,0.03,1)
  .mask(noise(2,0.1).brightness(1).luma(1,0))
  .colorama(0.2)
  .saturate(0.5)
  .modulate(noise(4,0.05),0.05)
  .luma(0.4,0)
)
.out()
