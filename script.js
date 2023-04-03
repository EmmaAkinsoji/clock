// analog

let secHand = document.querySelector('.hand-sec')
let minHand = document.querySelector('.hand-min')
let hourHand = document.querySelector('.hand-hour')

const analog = () =>{
let now = new Date ()
let sec = now.getSeconds()
let secDeg = ((sec/60) * 360 ) + 90
secHand.style.transform = `rotate(${secDeg}deg)`

let min = now.getMinutes()
let minDeg = ((min/60) * 360) + ((sec/60) * 6) + 90
minHand.style.transform = `rotate(${minDeg}deg)`

let hour = now.getHours()
let hourDeg = ((hour/12) * 360 ) + ((min/60) * 30) + 90
hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(analog, 1000)
analog()

// light~dark toggle
let body = document.querySelector('body')
let container = document.querySelector('.container')
let clock = document.querySelector('.clock')
let inner = document.querySelector('.inner')
let btn = document.querySelector('button')
let digit = document.querySelector('.digit')

const toggle = () =>{
body.classList.toggle('body-light-mode')
container.classList.toggle('container-light-mode')
clock.classList.toggle('clock-light-mode')
inner.classList.toggle('inner-light-mode')
digit.classList.toggle('digit-light-mode')
if(btn.innerHTML === 'Light Mode'){
btn.innerHTML = 'Dark Mode'
btn.style.backgroundColor = '#282828'
btn.style.color = '#e2e0e0'
}
else{btn.innerHTML = 'Light Mode'
btn.style.backgroundColor = '#e2e0e0'
btn.style.color = '#282828'
btn.style.border = 'none'
}
}


// digital~analog toggle
const toDigital = () => {
let container = document.querySelector('.container')
let digit = document.querySelector('.digit')
let analog = document.querySelector('.analog')
if(container.style.display === 'block'){
container.style.display = 'none'
digit.style.display = 'block'
if(analog.innerHTML === 'Digital'){analog.innerHTML = 'Analog'}
}
else{
container.style.display = 'block'
digit.style.display = 'none'
analog.innerHTML = 'Digital'
}
}

// digital clock 

const digital = () =>{
    let digit = document.querySelector('.digit-inner')
    let now = new Date ()
    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hr = now.getHours()
    let period = 'AM'
    
    if(hr === 0) {hr = 12}
    else if(hr >= 12) {
    hr = hr - 12;
    period = 'PM'}
    hr = hr < 10 ? `0${hr}` : hr
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec
    let domHr = document.querySelector('.hr').innerHTML = hr
    let domMin = document.querySelector('.min').innerHTML = min
    let domSec = document.querySelector('.sec').innerHTML = sec
    let domPeriod = document.querySelector('.period').innerHTML = period
    // let time = (`${hr}:${min}:${sec} ${period}`)
    // digit.innerHTML = time
    }
    
    setInterval(digital, 1000)
    digital()
