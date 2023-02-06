import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([])
  const [doneTodos, setDoneTodos] = useState([]);


  const handleSubmit = () => {
    if (title && content) {
      setTodos([...todos, {title, content}])
      setTitle('')
      setContent('')
    } 
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((item, i) => i !== index))
  };

  const handleMoveToDone = (index) => {
    const [todo] = todos.splice(index, 1);
    setTodos(todos);
    setDoneTodos([...doneTodos, todo]);
};

const handleDelete2 = (index) => {
  setDoneTodos(doneTodos.filter((item, i) => i !== index))
};

const handleMovetoTodo = (index) => {
  const [doneTodo] = doneTodos.splice(index, 1);
  setDoneTodos(doneTodos);
  setTodos([...todos, doneTodo]);
};
  
  return (
    <div className = "app-style">
      
      <div className = "topBox-style">
        {/* 여기에 My Todo List 와 React 문구 삽입 */}
        <div className ="left-text">My Todo List</div>
        <div className ="right-text">React</div>
      </div>

      <div className = "inputBox-style">
        {/* 여기에 제목 , 내용 입력란 생성 */}
        <label className='input-label'>제목:</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label className = 'input-label'>내용:</label>
        <input 
          type="text" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="submit-button" onClick={handleSubmit}>추가하기</button>
      </div>


      {/* 여기는 입력한 Todo-box가 쌓이는 곳 */}
      <div className = "workingText">Working...!</div>
      <div className="todo-area">
      
        {todos.map((todo, index) => (
          <div className="todo-box" key={index}>
            <div className="titleText">{todo.title}</div>
            <div className="contentText">{todo.content}</div>
            <button className="deleteButton" onClick ={()=>handleDelete(index)}>삭제하기</button>
            <button className="doneButton" onClick ={()=>handleMoveToDone(index)}>완료</button>
          </div>
        ))}
      </div>

      {/* 여기는 완료한 Todo-box가 쌓이는 곳 */}
      <div className = "workingText">완료...!</div>
      <div className = "done-area">
      
      {doneTodos.map((todo, index) => (
        <div className="todo-box" key={index}>
            <div className="titleText">{todo.title}</div>
            <div className="contentText">{todo.content}</div>
            <button className="deleteButton" onClick ={()=>handleDelete2(index)}>삭제하기</button>
            <button className="cancelButton" onClick ={()=>handleMovetoTodo(index)}>취소</button>
        </div>
      ))}
        
      </div>

    </div>
  );
}

export default App;