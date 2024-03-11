import state from "./state.js"
import * as el from './elements.js'
import * as action from './actions.js'
import { kichenTimer } from "./sounds.js"

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}

export function countdown(){

    clearTimeout(state.countdownId)

    if(state.isRunning === false){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        action.reset()
        kichenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function addFiveMinutes(){
    let minutes = Number(el.minutes.textContent)
    minutes = minutes >= 60 ? 60 : minutes + 5

    state.minutes = minutes
    state.seconds = 0
    updateDisplay()
}

export function removeFiveMinutes(){
    let minutes = Number(el.minutes.textContent)
    minutes = minutes <= 5 ? 5 : minutes - 5

    state.minutes = minutes
    state.seconds = 0
    updateDisplay()
}