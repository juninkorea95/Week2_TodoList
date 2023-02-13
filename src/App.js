import React from 'react'
import { useState } from 'react'

function App() {

  // title 과 content 는 제목/내용 빈칸에 들어가는 글자의 상태를 그려주기 위해 만든 state 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [todos, setTodos] = useState([
    {id : 1, title: '리액트', content: '리액트 공부하기', isDone : 0},
    {id : 2, title: '알고리즘', content: '알고리즘 공부하기', isDone : 1}
  ])
  
  console.log(todos)

  // 이 상태로 title, content를 console로 찍어보면 '실시간'으로 내가 입력한 값이 콘솔에 찍히는 것을 확인할 수 있다.
  // 이 말의 의미는, 이 값을 다른 함수 장치를 통해 다른 어딘가로 보내는 것도 가능하다는 뜻. 
  const titleChange = (e) => {setTitle(e.target.value)}
  const contentChange = (e) => {setContent(e.target.value)}

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
      setTodos([...todos,newTodo])
      // 값을 입력한 이후에는 input 비워주기 
      setTitle('')
      setContent('')
    } else {
      alert ('제목과 내용을 추가해주세요!')
    }
  }

  const deleteButtonHandler = (id) => {
      const updatedTodos = todos.filter(todo => {return todo.id !== id})  
      setTodos(updatedTodos)
  }

  const moveToDoneHandler = (id) => {
    const moveToDone = todos.map((todo) => (todo.id === id ) ? {...todo, isDone: 1} : todo)
    setTodos(moveToDone)
  }

  const returnToTodoHandler = (id) => {
    const returnToTodo = todos.map((todo) => (todo.id === id) ? {...todo, isDone: 0} : todo )
    setTodos(returnToTodo)
  }
 
  return (
    <div>
      {/* 맨 위에 Top-Box를 정의하는 부분 */}
      <div className='Top-Box' style = {{
        // styled-components 로 Top-Box 전체에 대한 스타일링을 여기에 해줌
        backgroundColor: 'pink',
        width: '1200px',
        height: '50px',
        border: '1px solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
      }}>

        {/* Top-Box Division에 들어가는 내용을 정의함 */}
        <div className ="left-text">My Todo List</div>
        <div className ="right-text">React</div>
      </div>

      {/* 이 곳에 title, content, submitButton이 들어간 input-box 영역을 만듭니다.  */}
      <div className='Input-Box' style = {{
        
          // 제목, 내용, 추가 버튼을 포괄하는 전체 박스(Input-Box)에 대한 스타일링은 이것으로!

          width: '1200px',
          height: '100px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          paddingLeft: '10px',
          paddingRight: '10px',
          margin: '0 auto',
          marginBottom: '10px'
      }}>

        {/* 제목 텍스트와 빈칸 생성 */}

        <label className='input-label' style={{
        fontFamily: '"Noto Sans KR", sans-serif',
        marginRight: '10px',
        marginLeft: '10px',
        fontWeight: 'bold'
        }}> 제목:</label>
        
        {/* 제목 빈칸 --> 이곳에서 쓰여지는 값을 추출해서 아래 구역에 옮겨줘야한다. */}
        <input className='input-button' 
        type = "text"
        value = {title}
        onChange = {titleChange}  // titleChange라는 함수가 무엇인지는 js영역에서 설명이 되어야한다. 
        />

        {/* 내용 텍스트와 빈칸 생성 */}
        <label className='input-label' style={{
        fontFamily: '"Noto Sans KR", sans-serif',
        marginRight: '10px',
        marginLeft: '10px',
        fontWeight: 'bold'
        }}>내용:</label>
        
        {/* 내용 빈칸 --> 이곳에서 쓰여지는 값을 추출해서 아래 구역에 옮겨줘야한다. */}
        <input className='input-button' 
        type = "text"
        value = {content}
        onChange = {contentChange}  // titleChange라는 함수가 무엇인지는 js영역에서 설명이 되어야한다. 
        />

        {/* 제출 버튼 생성 */}
        <button className="submit-button" style = {{
          backgroundColor: 'rgb(108, 175, 108)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'right',
          marginLeft: '30px',
        }} onClick = {submitButtonHandler}>추가</button>
      </div>

      {/* 여기서부터 추가를 누르면 추가되는 box가 모이는 todo area */}

      {/* To do 텍스트 부분만 하나의 영역으로 만들어서 정렬시켜줌..스타일링이 너무 많이 들어감. */}
      <div className='todoText' style = {{
          fontFamily: '"Oswald", sans-serif',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          width: '1200px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          // backgroundColor: 'yellow'
      }}> To do 😊 </div>

      {/* 이곳에 todo-area 에 대한 것을 정의한다.  */}
      <div className='todo-area' style = {{
        backgroundColor: 'skyblue',
        width: '1200px',
        minHeight: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
        marginBottom: '10px',
      }}>
      
      {/* 이곳이 todobox를 정의하는 곳 */}
      {/* 내가 했던 실수 : mapping을 한 뒤 그 안에 todobox를 꾸몄어야 했는데 거꾸로해버렸다.. */}
      {/* 논리의 흐름 : 입력한 정보를 mapping하여 나열한 뒤에 박스 안에 배치하는 스타일링을 하는 것이다.
      박스들이 만들어진 다음에 정보가 들어가는 게 아님!! */}
      {todos.filter(todo => todo.isDone === 0)
      .map(todo => (        
        <div className="todo-box" style = {{
          width: '200px',
          minHeight: '150px',
          border: '3px solid black',
          borderRadius: '10px',
          display: 'block',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginRight: '20px',
          marginBottom:'20px',
        }}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>삭제</button>
        <button onClick={()=> moveToDoneHandler(todo.id)}>완료</button>
        </div>
        ))}
      
      {/* todo-area 가 닫히는 태그 */}
      </div> 

      {/* 여기는 완료를 눌러 아래로 이동한 box가 모이는 done area  */}
      
      <div className='doneText' style = {{
          fontFamily: '"Oswald", sans-serif',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          width: '1200px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          // backgroundColor: 'yellow'
      }}> Done 😆 </div>
      
      <div className='done-area' style = {{
        backgroundColor: 'skyblue',
        width: '1200px',
        minHeight: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
      }}>

      {todos.filter(todo => todo.isDone === 1)
      .map(todo => (        
        <div className="todo-box" style = {{
          width: '200px',
          minHeight: '150px',
          border: '3px solid black',
          borderRadius: '10px',
          display: 'block',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginRight: '20px',
          marginBottom:'20px',
        }}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>삭제</button>
        <button onClick={() => returnToTodoHandler(todo.id)}>취소</button>
        </div>
        ))}  

       {/* done-area 태그가 여기서 닫힙니다.  */}
      </div>
      {/* jsx 영역이 여기서 닫힙니다. */}
      </div>
  )
}

export default App

  
  
