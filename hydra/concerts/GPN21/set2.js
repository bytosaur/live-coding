

s0.initScreen()

src(s0)
.scale(-1.03, -0.97)
.rotate(0,[0.01, -0.0, -0.01])
.saturate(1.1)
.repeat(1,1.0)
.color(1,1,0.4)
.hue(1.7)
.modulateScale(gradient().brightness(0))
.out()

osc(1,()=>(cc[1]*50)).pixelate([1],1).thresh()
.mult(osc(1,0.1,2).pixelate(1,1))
.brightness(()=>(cc[2]-0.5))
.scrollX(0.4)
.layer(
  src(o0)
  .luma(()=>(cc[2]),0)



  // .luma(0.1,()=>(cc[2]))
)
.out(o1)

render(o0)























                        ok gleich Systemabsturzzzz, baby :3
                        ich glaub das wars mit HENRIK  vs. PAUL HENRI













                                                <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                                      <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                                            <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                            <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                                  <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                                        <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
                                                                                    <3<3<3<3<3<3<3<3<3<3<<3<3<3<3<3<3<<3
