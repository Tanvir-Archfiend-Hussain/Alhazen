// fetching LOREM paragraphs
/** 
let para = document.getElementById("para")

fetch('readme.txt')
.then(x => x.text())
.then(y => para.innerHTML = y)
*/

// fetch images
function pic01Func() {
    fetch(`https://t.pimg.jp/026/660/080/1/26660080.jpg`)
    .then(x => {
        return x.blob()
    })
    .then(y => {
        document.getElementById('pic01').src = URL.createObjectURL(y)
    })
}

