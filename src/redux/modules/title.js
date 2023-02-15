const TITLE = 'TITLE'
const RESET = 'RESET'

export const Title = (value) => {
    return {
        type: TITLE,
        value: value,
    }
}

export const ResetTitle = () => {
    return {
        type: RESET,
    }
}

const initialState = ''


const title = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            return action.value
        case RESET:
            return ''
        default :
            return state;      
    }
}

export default title