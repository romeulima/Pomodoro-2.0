import * as el from './elements.js'
import * as actions from './actions.js'
import * as modes from './modes.js'

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
        const mode = even.target.dataset.mode

        if(typeof modes[mode] != 'function'){
            return
        }

        modes[mode]()
    })
}

