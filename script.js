let timerDisplay = document.querySelector('.timerDisplay')
let startBtn = document.querySelector('.start-btn')
let stopBtn = document.querySelector('.stop-btn')
let interval 
let seconds = 0
let minutes = 0
let hours = 0

startBtn.onclick = () => {
    clearInterval(interval)
    interval = setInterval(() => {
    seconds++
    if(seconds === 60) {
        seconds = 0
        minutes++
    }
    else if(minutes === 60) {
        minutes = 0
        hours++
    }
    timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000);
}

stopBtn.onclick = () => {
    clearInterval(interval)
}


