function Get07() {
    fetch('https://st.focusedcollection.com/14026668/i/1800/focused_270474838-stock-photo-mature-pregnant-woman-napping-bed.jpg')
    .then(x => {
        return x.blob()
    })
    .then(x => {
        document.getElementById('Id07').src = URL.createObjectURL(x)
    })
}

function Get48() {
    fetch('https://thumbs.dreamstime.com/z/portrait-beautiful-pregnant-young-mature-woman-11124673.jpg')
    .then(x => {
        return x.blob()
    })
    .then(x => {
        document.getElementById('Id48').src = URL.createObjectURL(x)
    })
}