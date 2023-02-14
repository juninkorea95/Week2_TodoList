// export const ADD = 'ADD'
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

// todos라는 state의 초기값을 redux에서는 이렇게 준다.
const initialState = [
    {id : 1, title: '리액트', content: '리액트 공부하기', isDone : 0},
    {id : 2, title: '알고리즘', content: '알고리즘 공부하기', isDone : 1}
   ]

//리듀서 (state에 변화를 일으키는 함수) -> state를 action의 type에 따라 변경한다. 
//이 함수의 인자는 state, action 두가지다. 
//action은 type과 payload를 갖고 있으며 객체 형태이다. -> state를 어떻게 할 것인지 표시해준다.   
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