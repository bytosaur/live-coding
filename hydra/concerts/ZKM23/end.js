await loadScript("https://cdn.jsdelivr.net/npm/p5.glitch@latest/p5.glitch.js")

a.setSmooth(0.1)

width = 1920
height = 1080
setResolution(width, height)
p5 = new P5({width: width, height: height})
glitch = new Glitch(p5);
// load a file containing base names for all the files in the directory
server_url = "http://localhost:8080/"
file_list = server_url + "file_list.json"
loadFileList = async (file_list) => {
    const response = await fetch(file_list);
    const data = await response.json();
    if (response.ok) {
        return data
    }
}
data = loadFileList(file_list)
images = []
data.then(function(result) {
    for (const el of result) {
      p5.loadImage(server_url + "jpg/" + el, img => {
        images.push(img)
    })
}})
counter = 0

//
// cc speed of image shift
// cc random or not
p5.clear()
p5.draw = () => {
    let xspeed = (cc[25])*50
    let yspeed = (cc[26])*50
	let counter_speed = Math.floor((cc[3])*100)  // OR -1 for random
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
			xpos = ((p5.frameCount * xspeed) % (width -image.width) )
			ypos = ((p5.frameCount * yspeed) % (height -image.height) )
        }
        if (glitch_it) {
      		glitch.loadImage(image); // load existing p5.js image
      		glitch.randomBytes(10); // randomize 10 bytes
      		glitch.replaceBytes(glitch_val, glitch_val%17); // find + replace all
      		glitch.buildImage(); // creates image from glitched data
          image = glitch.image
        }
		p5.image(image, xpos, ypos, image.width*cc[17]*8, image.height*cc[18]*8)
	}
}
p5.hide()

solid().out()

// cc luma
// cc invert
s0.init({src: p5.canvas})
src(o0)
.rotate([0.001, -0.001])
.hue(0.001)
.modulate(o0,[-0.0001,  0.0002].fast(0.3))
.scrollX([0.51, 0.5, -0.501].offset(0.5))
//.scrollY(0.499)
.contrast(1.1)
//.saturate(1.01)
.layer(
  //src(s0)
  //.mask(src(o2).thresh(0.2))
  //.scrollY(()=>time/20)
  src(s0)
  //.mask(src(s1).thresh())
  .modulate(src(o1).thresh(),0.5)
  //.luma(()=>(cc[9]),()=>(cc[10]))
  .luma(()=>(a.fft[0]-cc[9]),()=>(cc[10]))
  .invert(()=>(cc[11]))
  //.invert(()=>(a.fft[0]))
)
.out(o0)

bpm = 122 / 8


osc(27,-0.1)
.rotate(0.2)
.modulate(o1)
.invert(()=>(a.fft[0]))
.thresh(0.5,0)
.out(o2)


a.show()























noise(1,0.6).pixelate(4,3)
.scrollX([0.2, -0.72, 0, 0, 0.23])
.scrollY([0.2, -0.42, 0, 0.3])
.modulate(
  noise(1,0.9)
  .pixelate(2,4)
  , 0.3
)
.pixelate(37,17)
.out(o1)


render(o0)



osc(27,-0.1)
.rotate(0.2)
.luma()
.thresh(0.5,0)
.invert(()=>(a.fft[0]>0.5?0:1))
.out(o2)
