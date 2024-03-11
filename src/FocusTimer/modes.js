import state from './state.js'
let mode = undefined

export function tree(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        return
    }

    mode = 'Tree'
    state.isTree = document.documentElement.classList.toggle(mode)

}
export function rain(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        return
    }

    mode = 'Rain'
    state.isRain = document.documentElement.classList.toggle(mode)
}

export function coffee(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        return
    }

    mode = 'Coffee'
    state.isCoffee = document.documentElement.classList.toggle(mode)
}

export function fire(){
    if(document.documentElement.classList.contains(mode)){
        state[`is${mode}`] = document.documentElement.classList.toggle(mode)
        return
    }

    mode = 'Fire'
    state.isFire = document.documentElement.classList.toggle(mode)
}