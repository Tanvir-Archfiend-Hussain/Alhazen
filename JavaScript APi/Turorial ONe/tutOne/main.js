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

let file = "annual-enterprise-survey-2021-financial-year-provisional-csv.text"
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);
