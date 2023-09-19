// readable

many = (tex, each, n) => {
	let v = solid();
	for (ii = 0; ii < n; ii++) {
	  v = v.add(each(tex(), ii));
	}
	return v;
  }
  
  many(
	() => shape(3, 0.5).diff(shape(3, 0.48)),
	(t, ii) => t.rotate(() => 3.14 * Math.sin(time/(ii + 2))),
	6
  )
  .scale(0.8,0.6,1)
  .out()
  
  
  // compact
  
  new Array(6).fill().reduce(
	(a,b,ii) => (
	  a.add(
		shape(3, 0.5).diff(shape(3, 0.48))
		.rotate(() => 3.14 * Math.sin(time/(ii + 2)))
	 )), 
	solid()
  ).scale(0.8,0.6,1)
  .out()