const searchBX = document.querySelector('.search-box')
searchBX.addEventListener('keypress', setQuery)

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBX.value)
        console.log(searchBX.value);
    }
}

setQuery()