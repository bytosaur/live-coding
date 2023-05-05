// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// ameba 
// @mokitzo

noise(3,.9)
.repeat([1,2,3], [1,2], () => Math.sin(time/2), () => Math.sin(time/2))
.color(2,5,3.5)
//.modulate(o0, () => time* 0.0003)
.out(o0)


