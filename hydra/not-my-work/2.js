// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
const shuffle = ([...array]) => {
	for (let i = array.length - 1; i >= 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
	return array;
  }
  function sin(j){
	let sinary=[];
	for (i=0; i<=j; i+=0.1){
	  sinary.push(i);
	}
	return shuffle(sinary);
  }
  function cos(l){
	let cosary=[];
	for(k=0; k<=l; k+=0.1){
	  cosary.push(k);
	}
	return shuffle(cosary);
  }
  src(o0).posterize(2,2).contrast(1.1).shift().saturate(1.01).brightness(.1).modulateHue(src(o0).scale(1.01),2).layer(shape(4).scroll(sin(1).smooth(1/2).fast(1/4),cos(1).smooth(1/4).fast(1/2)).mask(shape(4).scroll(cos(1).reverse().smooth(1/4).fast(1/2),sin(1).reverse(1/2).fast(1/4)))).out()
  