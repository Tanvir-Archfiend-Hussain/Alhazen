// fetching LOREM paragraphs
let para = document.getElementById("para")

fetch('readme.txt')
.then(x => x.text())
.then(y => para.innerHTML = y)


// fetch images
function pic01Func() {
    let imagePicOne = document.getElementById('pic01')
    fetch('https://img.freepik.com/premium-photo/young-handsome-blond-guy-bedroom-with-large-window-with-curtains-bed-naked-some-rainbow-colored-panties-lgbt-community_255766-3393.jpg')
    .then(x => x.blob())
    .then(y => imagePicOne.innerHTML = y)
}

