// let date = new Date()
// let dateString = date.toDateString()
// console.log(dateString)

// function date(){
    let alldate = new Date()
    // console.log(alldate.toDateString)
    
    let date = alldate.getDate()
    let month =alldate.getMonth()
    let year = alldate.getFullYear()

    let hour = alldate.getHours()
    let minute = alldate.getMinutes()
    let seconds = alldate.getSeconds()

    console.log(`${date} / ${month} / ${year} ${" "} ${hour}: ${minute}: ${seconds}`)
// }
