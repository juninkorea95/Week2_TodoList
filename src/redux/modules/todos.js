// 원래 const [todos, setTodos] = useState([초기값]) 이렇게 쓰여져 있는 걸 다음과 같이 바꾸는 거다. (useState 대신 redux 사용이니까!) 
// 초기 상태값

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
        case 'ADD':
            return action.addedTodo

        case 'DELETE':
            return action.updatedTodos   
        
        case 'DONE':
            return action.moveToDone
        
        case 'CANCEL':
            return action.returnToTodo

        default:
            return state;
    }
}

export default todos