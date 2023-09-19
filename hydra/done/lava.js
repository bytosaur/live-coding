// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// lava lamp 2
// paul henri
// https://hydra.ojack.xyz/?sketch_id=8xTI37m2xcqBYMHu

osc(6,0,1.8).mask( //shape(99,0.5,0.00004).mask(
  shape(4,0.5,0.0001).scale(1,0.9,2)
  .sub(
    shape(99,0.1,0.6)
    .mult(
      osc(20,0.1)
      .modulateScale(shape(99,0.2,0.2),4)
      .luma(0.2,1)
    )
    )
)
//.sub(shape(99,0.1,0.04).mult(osc(6,0.1,0).luma()))
.colorama(0.18)
.saturate(0.8)
.out()
