const initialState = ''

const content = (state = initialState, action) =>{
    switch (action.type) {
        case 'CONTENT':
            return action.e.target.value
        default:
            return state;
    }
}

export default content