
a.setSmooth(0.1)

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

getRandomInt = (max) => Math.floor(Math.random() * max)
update = () =>(Math.floor(time*100)%2000==0?s0.initImage(images[getRandomInt(8)]):null)


// cc luma
// cc invert
bpm =10
src(o0)
.rotate([0.001, -0.004])
//.hue(0.001)
.modulate(o0,[-0.001, 0.002].fast(0.1))
// .scrollX([0.501, 0.5, -0.501].fast(0.1))
// .scrollY(0.498)
.layer(src(s0).modulateScrollX(o1,0.1).scrollX([0.3,-0.1].offset(0.3).fast(0.3)).luma(0.2))
.contrast(1.1)
.saturate(2)
.out(o0)

noise(2,0.1).pixelate([2,6],[4,1,2]).modulate(noise(20,0.2).pixelate([13,4],[15,8,1])).sub(gradient()).out(o1)

render(o0)

render()