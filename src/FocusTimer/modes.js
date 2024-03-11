import state from './state.js'
import * as sound from './sounds.js'

let mode = undefined

export function tree(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        sound[`${mode}Audio`].pause()
        return
    }

    mode = 'Tree'
    state.isTree = document.documentElement.classList.toggle(mode)
    sound.TreeAudio.play()

}
export function rain(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        sound[`${mode}Audio`].pause()
        return
    }

    mode = 'Rain'
    state.isRain = document.documentElement.classList.toggle(mode)
    sound.RainAudio.play()
}

export function coffee(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        sound[`${mode}Audio`].pause()
        return
    }

    mode = 'Coffee'
    state.isCoffee = document.documentElement.classList.toggle(mode)
    sound.CoffeeAudio.play()
}

export function fire(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        sound[`${mode}Audio`].pause()
        return
    }

    mode = 'Fire'
    state.isFire = document.documentElement.classList.toggle(mode)
    sound.FireAudio.play()
}