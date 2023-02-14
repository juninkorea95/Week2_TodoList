import React from 'react'
import TopBox from 'components/TopBox'
import InputBox from 'components/InputBox'
import TodoBox from 'components/TodoBox'
import DoneBox from 'components/DoneBox'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Title, ResetTitle } from 'redux/modules/title'
import { Content, ResetConTent } from 'redux/modules/content'
import { Add, Delete, Done, Cancel } from 'redux/modules/todos'


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
  
  // title 과 content 는 제목/내용 빈칸에 들어가는 글자의 상태를 그려주기 위해 만든 state 
  const title = useSelector(state => state.title)

  const content = useSelector(state => state.content)

  const todos = useSelector(state =>state.todos)
  
  const dispatch = useDispatch()

  // title 모듈로 e를 보내주었다. 
  const titleChange = (e) => {dispatch(Title(e.target.value))}
  
  // content 모듈로 e를 보내주었다. 
  const contentChange = (e) => {dispatch(Content(e.target.value))}

  const submitButtonHandler = () => {

    if (title && content) {
      const newTodo = {
        id: Date.now(),
        title: title,
        content: content,
        isDone: 0,
      }
      const addedTodo = [...todos,newTodo]
      dispatch(Add(addedTodo))
      
      dispatch(ResetTitle())
      dispatch(ResetConTent())
    
    } else {
      alert ('제목과 내용을 추가해주세요!')
    }
  }

  const deleteButtonHandler = (id) => {
      const updatedTodos = todos.filter(todo => {return todo.id !== id})  
      dispatch(Delete(updatedTodos))}

  const moveToDoneHandler = (id) => {
    const moveToDone = todos.map((todo) => (todo.id === id ) ? {...todo, isDone: 1} : todo)
    dispatch(Done(moveToDone))}

  const returnToTodoHandler = (id) => {
    const returnToTodo = todos.map((todo) => (todo.id === id) ? {...todo, isDone: 0} : todo )
    dispatch(Cancel(returnToTodo))
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