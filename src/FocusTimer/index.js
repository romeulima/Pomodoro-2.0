import state from './state.js'
import * as event from './events.js'

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    event.registerControls()
    event.registerModes()
}