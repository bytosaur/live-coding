await loadScript("https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js")


width = 1200
height = 800
setResolution(width, height)
p5 = new P5({width: width, height: height})
glitch = new Glitch(p5);
// load a file containing base names for all the files in the directory
server_url = "http://localhost:8080/"
file_list = server_url + "file_list.json"
// load the file_list
loadFileList = async (file_list) => {
    const response = await fetch(file_list);
    const data = await response.json();
    if (response.ok) {
        return data
    }
}
// load the file list
data = loadFileList(file_list)
images = []
data.then(function(result) {
    for (const el of result) {
      p5.loadImage(server_url + "jpg/" + el, img => {
        images.push(img)
        //console.log("loaded image: " + el)
    })
}})
counter = 0

//
// cc speed of image shift
// cc random or not
p5.clear()
p5.draw = () => {
    let xspeed = (cc[25]-0.5)*10
    let yspeed = (cc[26]-0.5)*10
	let counter_speed = Math.floor(cc[3]*10)  // OR -1 for random
	let background_removal = cc[2]*1000 // OR -1 for no background removal
    let sample_rate = cc[1]*10 // OR 10 for every 10th frame
    let random_pos = cc[60]==1?true:false
    let glitch_val = cc[4]*200
    let glitch_it = cc[63]==1?true:false
    if (p5.frameCount % background_removal == 0 && background_removal > 0) {
       p5.background(0)
    }
    let xpos = 0
    let ypos = 0
    let image = null
    counter += p5.frameCount % counter_speed == 0 ? 1 : 0
    counter %= images.length
	if (p5.frameCount % sample_rate == 0) {
		if (counter_speed >= 0) {
			image = images[counter]
		}
		else {
			let random_index = Math.floor(Math.random() * images.length)
			image = images[random_index % images.length]
		}
        if (random_pos){
			xpos = Math.floor(Math.random() * (width -image.width))
			ypos = Math.floor(Math.random() * (height -image.height))
        }
        else {
			xpos = (Math.abs(p5.frameCount * xspeed) % (width -image.width) )
			ypos = (Math.abs(p5.frameCount * yspeed) % (height -image.height) )
        }
        if (glitch_it) {
      		glitch.loadImage(image); // load existing p5.js image
      		glitch.randomBytes(10); // randomize 10 bytes
      		glitch.replaceBytes(glitch_val, glitch_val%17); // find + replace all
      		glitch.buildImage(); // creates image from glitched data
          image = glitch.image
        }
		p5.image(image, xpos, ypos)
	}
}
p5.hide()

p5.show()


// scroll by about 0.5 in a loop is awesome
// cc luma
// cc invert
s0.init({src: p5.canvas})
src(o0)
.rotate([0.001, -0.001])
.hue(0.001)
//.modulate(o0,[-0.001, 0.0002].fast(0.3))
//.scrollX([0.501, 0.5, -0.501].offset(0.5))
//.scrollY(0.499)
//.contrast(1.01)
//.saturate(1.01)
.layer(
  src(s0)
  .luma(()=>(cc[9]),()=>(cc[10]))
  .modulate(src(o1),0.5)
  .mask(src(o1).thresh(0.2))
  //.scrollY(()=>time/20)
  .invert(()=>(cc[11]))
)
.out(o0)

s1.initCam()

noise(1,0).pixelate(4,3)
.scrollX([0.2, -0.72, 0, 0, 0.23])
.scrollY([0.2, -0.42, 0, 0.3])
.modulate(
  noise(1,0.1)
  .pixelate(2,4)
  , 0.3
)
.pixelate(64,64)
.out(o1)


render(o0)


// src(o0)
// .mask(o2)
// .out(o1)

// square().rotate(-Math.PI/3.2)
// .mask(shape(4,0.3).scale(1,3,20).rotate(-Math.PI/2))
// .repeat(3,1)
// .out(o2)

// render(o1)