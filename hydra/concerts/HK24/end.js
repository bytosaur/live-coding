
a.setSmooth(0.7)



bpm=120/16



shape([2.7,1.4,1.7])
	.repeat([2,3,4],[3,1])
 .mult(gradient(1))
.colorama(0.9)
.color(()=>(a.fft[0]+1)/2,0,()=>(a.fft[0]+1)/2)
.diff(shape([99,3],0.4)
      .diff(
  		shape([3,4],[0.2,0.5].smooth())
  		.scrollY([0.2,-0.2].smooth())
).color(1,0.6,0.4).scale(()=>(a.fft[0]+1))
      .repeat([1,4],[3,2]).modulate(o1)
)
//.scrollY(0,1)
.layer(noise(2,2).pixelate([7,2],[1,6,2]).thresh(0.5,0.3).luma().color(0,0,0).modulate(noise()))
.contrast(2).out()

render(o1)

setResolution(1200,2)

src(o1)
.mask(
  osc(10,1).pixelate(3,4).thresh(0.5,0)
)
.scale([1.01,0.9,1,1,1].fast(0.2))
.brightness(-.01)
//.rotate(0.002)
.layer(src(o0).luma(()=>(a.fft[0]-0.2),0))
.out(o1)

src(o0)
.diff(o3)
.invert([0,1,0,0,1].fast(1))
.out(o2)

render(o2)



width = 1200
height = 800
setResolution(width, height)
p5 = new P5({width: width, height: height})
// load a file containing base names for all the files in the directory
server_url = "http://localhost:8080/"
file_list = server_url + "file_list.json"
loadFileList = async (file_list) => {
    const response = await fetch(file_list);
    const data = await response.json();
    if (response.ok) {
        return data
    }
   console.log('data:'+data)
}
data = loadFileList(file_list)
images = []
data.then(function(result) {
    for (const el of result) {
      images.push(server_url+'jpg/'+el)
    }
})
counter = 0

a.show()

setResolution(700,600)

getRandomInt = (max) => Math.floor(Math.random() * max)
update = () =>(Math.floor(time*100)%200==0?s0.initImage(images[getRandomInt(3)]):null)


// cc luma
// cc invert
bpm =10
src(o3)
.rotate([0.001, -0.002])
//.hue(0.001)
.modulate(o0,[-0.001, 0.002].fast(0.1))
// .scrollX([0.501, 0.5, -0.501].fast(0.1))
// .scrollY(0.49)
.layer(src(s0).modulateScrollX(o1,0.1).scrollX([0.3,-0.1].offset(0.3).fast(0.3)).luma(0.7))
.contrast(1.1)
//.saturate(2)
.out(o3)

render(o3)

noise(2,0.1).pixelate([2,6],[4,1,2]).modulate(noise(20,0.2).pixelate([13,4],[15,8,1])).sub(gradient()).out(o1)

render(o0)