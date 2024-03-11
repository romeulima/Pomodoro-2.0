import state from './state.js'

export function tree(){
    state.isTree = document.documentElement.classList.toggle('tree')
}
export function rain(){
    state.isRain = document.documentElement.classList.toggle('rain')
}

export function coffe(){
    state.isCoffe = document.documentElement.classList.toggle('coffe')
}

export function fire(){
    state.isFire = document.documentElement.classList.toggle('fire')
}