shape(3) // use any kind of texture
.luma() // apply luma to leave blanks
.rotate(1,1)
.out(o0)

src(o1) //source itself (see output buffer)
//.modulateScrollY(o1, 0.01) // apply some kind of modification
.modulateScale(o0, 0.1) // apply some kind of modification
//.hue(0.01)
.layer
  (src(o0)
  .rotate(1,1)
  .luma(0.1)
  )  // layer the original texture (as a seed)
.out(o1) // write to itself (see input buffer)



render(o1)
