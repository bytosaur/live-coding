
window.p5 = null
window.p5 = new P5({width: 1200})
console.log(p5.width)
console.log(p5.height)
// load a file containing base names for all the files in the directory
const server_url = "http://localhost:8080/"
const file_list = server_url + "file_list.json"
// load the file_list
async function loadFileList(file_list) {
    const response = await fetch(file_list);
    const data = await response.json();
    if (response.ok) {
        return data
    }
}

// load the file list
window.data = loadFileList(file_list)
window.images = []
data.then(function(result) {
    for (const el of result) {
      p5.loadImage(server_url + "zkm_plakate/" + el, img => {
        images.push(img)
        //console.log("loaded image: " + el)
    })
}})
p5.clear()

p5.draw = function() {
    if (p5.frameCount % 100 == 0) {
       p5.background(0)
    }
    const random_index = Math.floor(Math.random() * images.length)
	if (p5.frameCount % 10 == 0) {
		const randomX = Math.floor(Math.random() * p5.width)
		const randomY = Math.floor(Math.random() * p5.height)
        console.log(images)
		p5.image(images[random_index], randomX, randomY)
	}
}

p5.hide()

//p5.canvas = null

//p5.draw = null

s0.init({src: p5.canvas})

src(o0)
.rotate([0.0001, -0.0002])
.hue(0.002)
.modulate(o0,[-0.001, 0.002])
//.contrast(1.1)
//.saturate(1.2)
.layer(src(s0).luma(0.4,0.0).invert(0))
.out(o0)

src(o0)
.mask(o2)
.out(o1)

square().rotate(-Math.PI/3.2)
.mask(shape(4,0.3).scale(1,3,20).rotate(-Math.PI/2))
.repeat(3,1)
.out(o2)

render(o1)
