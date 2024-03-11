import state from './state.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function reset(){
    console.log('olá, você está na funcão Stop.')
}

export function plus(){
    console.log('olá, você está na funcão Plus')
}

export function minus(){
    console.log('olá, você está na função minus')
}