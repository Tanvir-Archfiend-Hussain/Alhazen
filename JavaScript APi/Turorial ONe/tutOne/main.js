/**
 * 
 *  
 * const searchBX = document.querySelector('.search-box')
 * searchBX.addEventListener('keypress', setQuery)

  
function setQuery(evt) {
    if (evt.keyCode == 13) {
        //getResults(searchBX.value)
        console.log(searchBX.value);
    }
}
*/

function TextFunc() {
    let file = "annual-enterprise-survey-2021-financial-year-provisional-csv.text"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("demo").innerHTML = y);
}

function GetLorem() {
    let xFile = "lorem.txt" 
    fetch(xFile)
    .then(x => x.text())
    .then(y => document.getElementById("demo").innerHTML = y)
}  

function PicGet() {
    fetch('PIC025.webp')
    .then(x =>  {
        return x.blob()
    })
    .then(y => {
        document.getElementById('idGreenImage').src = URL.createObjectURL(y)
    })
}

/** 
 * 
 * 
 * fetch('rainbow.jpg')
.then(response => {
    console.log(response)
    return response.blob()
})
.then(blo => {
    console.log(blo)
    document.getElementById('rainbow').src = URL.createObjectURL(blo);
})
 * 
 */