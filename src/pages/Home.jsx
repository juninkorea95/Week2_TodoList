import React from 'react'
import TopBox from 'components/TopBox'
import InputBox from 'components/InputBox'
import TodoBox from 'components/TodoBox'
import DoneBox from 'components/DoneBox'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Content, Reset } from 'redux/modules/Input'
import { Add, Delete, Done, Cancel } from 'redux/modules/todos'

function Home() {
  
  const dispatch = useDispatch()

  const Input = useSelector(state => state.Input)
  const todos = useSelector(state =>state.todos)
  
  const titleChange = (e) => {dispatch(Title(e.target.value))}
  const contentChange = (e) => {dispatch(Content(e.target.value))}

  const submitButtonHandler = () => {
   
    if (Input.title && Input.content) {
      const newTodo = {
        id: Date.now(),
        title: Input.title,
        content: Input.content,
        isDone: 0,
      }

      dispatch(Add(newTodo))
      dispatch(Reset())
    
    } else {
      alert ('제목과 내용을 추가해주세요!')
    }
  }
  // 저 id는 컴포넌트 타고 들어가면 TodoBox.jsx에서 확인할 수 있다. 
  const deleteButtonHandler = (id) => {dispatch(Delete(id))}
  const moveToDoneHandler = (id) => {dispatch(Done(id))}
  const returnToTodoHandler = (id) => {dispatch(Cancel(id))}
 
  return (
    <div>
      <TopBox/>

      <InputBox
        title = {Input.title}
        content = {Input.content}
        titleChange = {titleChange}
        contentChange = {contentChange}
        submitButtonHandler = {submitButtonHandler}
      />

      <TodoBox
        todos = {todos}
        deleteButtonHandler = {deleteButtonHandler}
        moveToDoneHandler = {moveToDoneHandler}
      />
       
      <DoneBox
        todos = {todos}
        deleteButtonHandler = {deleteButtonHandler}
        returnToTodoHandler = {returnToTodoHandler}
      />
      
      </div>
  )
}


export default Home;