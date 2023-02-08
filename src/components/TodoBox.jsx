import React from "react";

const TodoBox = ({index,todo,handleDelete,handleMoveToDone}) => {
    return (
    <div className="todo-box" key={index}>
        <div className="titleText">-{todo.title}-</div>
        <div className="contentText">"{todo.content}"</div>
        <button className="deleteButton" onClick ={()=>handleDelete(index)}>삭제</button>
        <button className="doneButton" onClick ={()=>handleMoveToDone(index)}>완료</button>
  </div>
    )
}

export default TodoBox;