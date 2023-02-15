const ADD = 'ADD'
const DELETE = 'DELETE'
const DONE = 'DONE'
const CANCEL = 'CANCEL'

export const Add = (value) => {
    return {
        type: ADD,
        value,
    }
}

export const Delete = (value) => {
    return {
        type:DELETE,
        value,
    }
}

export const Done = (value) => {
    return {
        type:DONE,
        value,
    }
}

export const Cancel = (value) => {
    return {
        type:CANCEL,
        value,
    }
}


const initialState = [
    {id : 1, title: '리액트', content: '리액트 공부하기', isDone : 0},
    {id : 2, title: '알고리즘', content: '알고리즘 공부하기', isDone : 1}
   ]

const todos = (state = initialState, action) => {
   switch (action.type) {
       case ADD:
           return action.value

       case DELETE:
           return action.value  
       
       case DONE:
           return action.value
       
       case CANCEL:
           return action.value

       default:
           return state;
   }
}

export default todos