import React from "react";

const DoneBox = ({index, done, handleDelete2, handleMovetoTodo}) => {
    return (
        <div className="done-box" key={index}>
            <div className="titleText">-{done.title}-</div>
            <div className="contentText">"{done.content}"</div>
            <button className="deleteButton" onClick ={()=>handleDelete2(index)}>삭제</button>
            <button className="cancelButton" onClick ={()=>handleMovetoTodo(index)}>취소</button>
        </div>
    )
}

export default DoneBox