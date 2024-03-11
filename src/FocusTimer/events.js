import * as el from './elements.js'
import * as actions from './actions.js'
import * as modes from './modes.js'
import state from './state.js'

export function registerControls(){
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]()
    })
} 

export function registerModes(){
    el.modes.addEventListener('click', (even) => {
        const mode = even.target.dataset.action

        if(typeof modes[mode] != 'function'){
            return
        }

        modes[mode]()
    })
}

