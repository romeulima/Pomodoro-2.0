import state from './state.js'
import * as timer from './timer.js'
import { buttonPressAudio } from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    buttonPressAudio.play()
}

export function plus(){
    if(state.isRunning){
        return
    }
    
    timer.addFiveMinutes()
}

export function minus(){
    if(state.isRunning){
        return
    }
    timer.removeFiveMinutes()
}