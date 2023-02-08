import React from 'react';
import { useState } from 'react';
import 'App.css';
import TopBox from './components/TopBox.jsx';
import InputBox from 'components/InputBox.jsx';
import TodoBox from 'components/TodoBox.jsx';
import DoneBox from 'components/DoneBox.jsx';

function App() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([{title: "리액트", content: "리액트 기본 공부"}])
  const [doneTodos, setDoneTodos] = useState([{title: "알고리즘", content: "알고리즘 패턴 정리"}]);

  const handleSubmit = () => {
    if (title && content) {
      setTodos([...todos, {title, content}])
      setTitle('')
      setContent('')
    } else {
      alert ('제목과 내용을 입력해 주세요!')
    }
  };

  // handleKeyDown은 또다시 handleSubmit을 호출하는데, 그 조건은 enter키를 눌러야 함.
    const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  
  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
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
      <TopBox/>
      <InputBox
        title = {title}
        content = {content}
        setTitle={setTitle} 
        setContent={setContent} 
        handleSubmit={handleSubmit} 
        handleKeyDown={handleKeyDown} 
      />
        
      {/* 여기는 입력한 Todo-box가 쌓이는 곳 */}
      
      <div className = "todoText">To do</div>
      <div className="todo-area">
        {todos.map((todo, index) => (
          <TodoBox
          index = {index}
          todo = {todo}
          handleDelete = {handleDelete}
          handleMoveToDone = {handleMoveToDone}  
          />
        ))}
      </div>
      
      

      {/* 여기는 완료한 Todo-box가 쌓이는 곳 */}
    
        <div className = "doneText">Complete</div>
          <div className = "done-area">
          {doneTodos.map((done, index) => (
            <DoneBox
              index = {index}
              done = {done}
              handleDelete2 = {handleDelete2}
              handleMovetoTodo = {handleMovetoTodo}
            />
      ))}
      </div>
      
    </div>
  );
}

export default App;