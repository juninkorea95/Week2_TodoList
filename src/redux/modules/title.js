const initialState = ''


const title = (state = initialState, action) => {
    switch (action.type) {
        case 'TITLE':
            return action.e.target.value
        default :
            return state;      
    }
}

export default title
    