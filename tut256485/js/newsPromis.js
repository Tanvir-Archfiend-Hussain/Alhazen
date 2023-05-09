/****************************************************** */
/************** Not ASYNCH AWAIT************************ */
/****************************************************** */

function Get01() {
    fetch('https://c8.alamy.com/comp/BBEECH/portrait-of-pregnant-woman-BBEECH.jpg')
    .then(c => {
        return c.blob()
    }).then(c => {
        document.getElementById('Id01').src = URL.createObjectURL(c)
})}

function Get02() {
    fetch('')
    .then(x => {
        return x.blob()
    })
    .then(y => {
        document.getElementById('Id02').src = URL.createObjectURL(y)
    })
}