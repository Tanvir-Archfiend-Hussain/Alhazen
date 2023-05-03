let para = document.getElementById("para")

fetch('readme.txt')
.then(x => x.text())
.then(y => para.innerHTML = y)