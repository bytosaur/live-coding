//await loadScript("https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js")

//glitch = new Glitch();

window.p5 = null
window.p5 = new P5({width: 800})
console.log(p5.width)
console.log(p5.height)
// load a file containing base names for all the files in the directory
window.server_url = "http://localhost:8080/"
window.file_list = server_url + "file_list.json"
// load the file_list
window.loadFileList = async (file_list) => {
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

//
// cc speed of image shift
// cc randnom or not
p5.clear()
window.counter = 0
p5.draw = () => {
    let xspeed = 1
    let yspeed = 1
	let counter_speed = 1  // OR -1 for random
	let background_removal = 100 // OR -1 for no background removal
	let sample_rate = 100 // OR 10 for every 10th frame
    if (p5.frameCount % background_removal == 0 && background_removal > 0) {
       p5.background(0)
    }
    window.counter += p5.frameCount % counter_speed == 0 ? 1 : 0
    window.counter %= images.length
	if (p5.frameCount % sample_rate == 0) {
		let image = null
		if (counter_speed >= 0) {
			image = images[window.counter]
		}
		else {
			const random_index = Math.floor(Math.random() * images.length)
			image = images[random_index]
		}
		//const xpos = Math.floor(Math.random() * (p5.width -image.width))
		//const ypos = Math.floor(Math.random() * (p5.height -image.height))
		const xpos = (p5.frameCount * xspeed % (p5.width -image.width) )
		const ypos = (p5.frameCount * yspeed % (p5.height -image.height) )
		//glitch.loadImage(image); // load existing p5.js image
		//glitch.randomBytes(10); // randomize 10 bytes
		//glitch.replaceBytes(45, 127); // find + replace all
		//glitch.replaceHex('ffdb00430001','ffdb004300ff'); // jpg quant table
		p5.image(image, xpos, ypos)
	}
}

p5.hide()

//p5.canvas = null

//p5.draw = null

s0.init({src: p5.canvas})
src(o0)
.rotate([0.001, -0.002])
.hue(0.002)
.modulate(o0,[-0.0001, 0.0002].fast(0.1))
.scrollX(-0.00008)
//.scrollX(0.5)
.scrollY(0.5)
//.contrast(1.1)
//.saturate(1.2)
.layer(src(s0).luma(0.7,0.0).scrollY(()=>time/100).invert(1))
.out(o0)

render(o0)

// src(o0)
// .mask(o2)
// .out(o1)

// square().rotate(-Math.PI/3.2)
// .mask(shape(4,0.3).scale(1,3,20).rotate(-Math.PI/2))
// .repeat(3,1)
// .out(o2)

// render(o1)
