
hush()

to3d = (tex, scale_) => tex().scale(scale_).add(tex().scale(scale_).scrollX((1-scale_)/10)).brightness(scale_-1)


l0 = ()=> shape(3)
.repeat()

to3d(l0, 0.8).luma(0.1)
.layer(to3d(l0, 1).luma(0.1))
.layer(to3d(l0, 1.2).luma(0.2))
.out(o0)
