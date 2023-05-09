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
    fetch('https://thumbs.dreamstime.com/z/mature-pregnant-mother-senior-father-waiting-baby-years-old-66472080.jpg')
    .then(x => {
        return x.blob()
    })
    .then(y => {
        document.getElementById('Id02').src = URL.createObjectURL(y)
    })
}

function Get03() {
    fetch('https://media.istockphoto.com/id/893158074/photo/young-pretty-pregnant-woman-at-home.jpg?s=612x612&w=is&k=20&c=lSXTGQBYLsWTEtWy7qh0Iwm5RNceW-tYiLyZk91v4jM=')
    .then(x => {
        return x.blob()
    })
    .then(g => {
        document.getElementById('Id03').src = URL.createObjectURL(g)
    })
}

function Get04() {
    fetch('https://media.istockphoto.com/id/174374543/photo/pregnant-woman.jpg?s=1024x1024&w=is&k=20&c=x5IIpheK_mJFNbjmN2Oe3uQzYmUYV8Zm93DKJWsT4yg=')
    .then(f => {
        return f.blob()
    })
    .then(f => {
        document.getElementById('Id04').src = URL.createObjectURL(f)
    })
}