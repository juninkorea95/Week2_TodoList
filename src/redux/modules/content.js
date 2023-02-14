const CONTENT = 'CONTENT'
const RESET = 'RESET'

export const Content = (value) => {
    return {
        type: CONTENT,
        value,
    }
}


export const ResetConTent = () => {
    return {
        type: RESET,
    }
}


const initialState = ''

const content = (state = initialState, action) =>{
    switch (action.type) {
        case CONTENT:
            return action.value
        case RESET:
            return ''
        default:
            return state;
    }
}

export default content