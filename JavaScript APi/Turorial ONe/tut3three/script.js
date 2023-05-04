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

function pic0202() {
    fetch(`https://thumb-p9.xhcdn.com/a/MYGcCIuS9TQicVbMgc409w/000/144/065/369_450.jpg`)
    .then(x => {
        return x.blob()
    })
    .then(y => {
        document.getElementById('pic02').src = URL.createObjectURL(y)
    })
}