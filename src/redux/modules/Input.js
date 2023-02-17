const TITLE = 'TITLE'
const RESET = 'RESET'
const CONTENT = 'CONTENT'

export const Title = (value) => {
    return {
        type: TITLE,
        value,
    }
}

export const Reset = () => {
    return {
        type: RESET,
    }
}

export const Content = (value) => {
    return {
        type: CONTENT,
        value,
    }
}

const initialState = {
    title :'',
    content: '',
}

const Input = (state = initialState, action) => {
    switch (action.type) {
        case TITLE:
            return {
                title: action.value,
                content: state.content
            }
        case CONTENT:
            return {
                title: state.title,
                content: action.value,
            }
        case RESET:
            return {
                title: '',
                content: ''
            }    
        default:
            return state;      
    }
}


export default Input