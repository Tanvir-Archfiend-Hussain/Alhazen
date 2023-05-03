// fetching LOREM paragraphs
/** 
let para = document.getElementById("para")

fetch('readme.txt')
.then(x => x.text())
.then(y => para.innerHTML = y)
*/

// fetch images
function pic01Func() {
    fetch("https://ae01.alicdn.com/kf/HTB1HCERIFXXXXb_XVXXq6xXFXXXE/220440850/HTB1HCERIFXXXXb_XVXXq6xXFXXXE.jpg_640x640q90.jpg?size=73560&height=379&width=750&hash=2c699457e9d1dcd97f8a997a6bdf34c6")
    .then(x => {
        return x.blob()
    })
    .then(y => {
        document.getElementById('pic01').src = URL.createObjectURL(y)
    })
}

