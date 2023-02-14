import React from 'react'
import TopBox from 'components/TopBox'
import InputBox from 'components/InputBox'
import TodoBox from 'components/TodoBox'
import DoneBox from 'components/DoneBox'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, deleteTodo, doneTodo, cancelTodo } from 'redux/modules/todos'


const StText = styled.div`
    font-Family: "Oswald", sans-serif;
    font-Size: 20px;
    font-Weight: bold;
    margin-Bottom: 10px;
    width: 1200px;
    height: 50px;
    display: flex;
    align-Items: center;
    margin: 0 auto;
`

const StArea = styled.div`
        background-Color: skyblue;
        width: 1200px;
        min-Height: 200px;
        display: flex;
        flex-Wrap: wrap;
        align-Items: center;
        justify-Content: left;
        padding-Left: 10px;
        padding-Right: 10px;
        margin: 0 auto;
        margin-Bottom: 10px;
`

const StBox = styled.div`
    width: 200px;
    min-Height: 150px;
    border: 3px solid black;
    border-Radius: 10px;
    display: block;
    align-Items: center;
    justify-Content: center;
    text-Align: center;
    margin-Right: 20px;
    margin-Bottom: 20px;
`

export { StText, StBox ,StArea }

function App() {

  // redux를 쓴다면 useSelector를 여기에서 쓴다!
  //아래의 식에서 'state'는 store에 저장되고 관리되는 전체 state를 의미한다. 
  // useSelector는 결국 configStore.js에 저장되어있는 state애들을 가져와서 필요한 정보만 뽑아 쓸수 있게 돕는 hook이다. 
  // 결국 props와 하는 일이 매우 비슷하다. 다만 접근방식이 상하관리 -> 중앙 분산관리로 바뀌었을 뿐. 
  
  // const title = useSelector(state => state) 

  // const content = useSelector(state => state) 

  
  // title 과 content 는 제목/내용 빈칸에 들어가는 글자의 상태를 그려주기 위해 만든 state 
  const title = useSelector(state => state.title)

  const content = useSelector(state => state.content)

  const todos = useSelector(state =>state.todos)

  // 이 상태로 title, content를 console로 찍어보면 '실시간'으로 내가 입력한 값이 콘솔에 찍히는 것을 확인할 수 있다.
  // 이 말의 의미는, 이 값을 다른 함수 장치를 통해 다른 어딘가로 보내는 것도 가능하다는 뜻. 
  
  const dispatch = useDispatch()

  // title 모듈로 e를 보내주었다. 
  const titleChange = (e) => {dispatch({
    type: 'TITLE',
    e,
  })}
  
  // content 모듈로 e를 보내주었다. 
  const contentChange = (e) => {dispatch({
    type: 'CONTENT',
    e,
  })}

  const submitButtonHandler = () => {

    // 두 인풋박스에 모두 입력값이 있다면
    // 아래와 같은 newTodo라는 요소(객체의 형태)를 만들어 todos라는 배열의 다음요소로 넣어준다(넣어주는 동작은 setTodos가 한다). 
    if (title && content) {
      const newTodo = {
        id: Date.now(),
        title: title,
        content: content,
        isDone: 0,
      }
      const addedTodo = [...todos,newTodo]
      dispatch({
        type : 'ADD',
        addedTodo
      })
      // 값을 입력한 이후에는 input 비워주기 
    
    } else {
      alert ('제목과 내용을 추가해주세요!')
    }
  }

  const deleteButtonHandler = (id) => {
      const updatedTodos = todos.filter(todo => {return todo.id !== id})  
      dispatch({
        type : 'DELETE',
        updatedTodos,
      })}

  const moveToDoneHandler = (id) => {
    const moveToDone = todos.map((todo) => (todo.id === id ) ? {...todo, isDone: 1} : todo)
    dispatch({
      type: 'DONE',
      moveToDone,
    })}

  const returnToTodoHandler = (id) => {
    const returnToTodo = todos.map((todo) => (todo.id === id) ? {...todo, isDone: 0} : todo )
    dispatch({
      type: 'CANCEL',
      returnToTodo,
    })
  }
 
  return (
    <div>
      {/* 맨 위에 Top-Box를 정의하는 부분 */}
      {/* 이제 TopBox의 UI 정보는 다 TopBox.jsx로 보내짐 */}
      <TopBox/>

      {/* 이 곳에 title, content, submitButton이 들어간 input-box 영역을 만듭니다.  */}
      <InputBox
        title = {title}
        content = {content}
        titleChange = {titleChange}
        contentChange = {contentChange}
        submitButtonHandler = {submitButtonHandler}
      />

      {/* 여기서부터 추가를 누르면 todo-box가 모이는 todo area */}
      <TodoBox
        todos = {todos}
        deleteButtonHandler = {deleteButtonHandler}
        moveToDoneHandler = {moveToDoneHandler}
      />
       
      
      {/* 여기는 완료를 눌러 아래로 이동한 box가 모이는 done area  */}
      <DoneBox
        todos = {todos}
        deleteButtonHandler = {deleteButtonHandler}
        returnToTodoHandler = {returnToTodoHandler}
      />
      
      {/* jsx 영역이 여기서 닫힙니다. */}
      </div>
  )
}


export default App;