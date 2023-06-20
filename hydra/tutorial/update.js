
K = () => (shape(Math.random()*4).out())

update = () => ((time % 2 < 0.01) ? K() : null)