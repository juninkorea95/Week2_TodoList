import React from 'react'
import TopBox from 'components/TopBox'
import InputBox from 'components/InputBox'
import TodoBox from 'components/TodoBox'
import DoneBox from 'components/DoneBox'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Content, Reset } from 'redux/modules/Input'
import { Add, Delete, Done, Cancel } from 'redux/modules/todos'

function Home() {
  
  // title 과 content 는 제목/내용 빈칸에 들어가는 글자의 상태를 그려주기 위해 만든 state 
  const Input = useSelector(state => state.Input)
//   const content = useSelector(state => state.content)
  const todos = useSelector(state =>state.todos)
  
  
  const dispatch = useDispatch()

  // title 모듈로 e를 보내주었다. 
  const titleChange = (e) => {dispatch(Title(e.target.value))}
  
  // content 모듈로 e를 보내주었다. 
  const contentChange = (e) => {dispatch(Content(e.target.value))}

  const submitButtonHandler = () => {
   
    if (Input.title && Input.content) {
      const newTodo = {
        id: Date.now(),
        title: Input.title,
        content: Input.content,
        isDone: 0,
      }
      const addedTodo = [...todos,newTodo]
      dispatch(Add(addedTodo))
      
      dispatch(Reset())
    
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
        title = {Input.title}
        content = {Input.content}
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


export default Home;