import { StArea, StBox, StText } from "pages/Home"
import { Link } from "react-router-dom"

function DoneBox ({todos, deleteButtonHandler, returnToTodoHandler}) {
    return (
        <div>
      <StText> Done 😆 </StText>
      
      <StArea>

      {todos.filter(todo => todo.isDone === 1)
      .map(todo => (        
        <StBox key = {todo.id}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>삭제</button>
        <button onClick={() => returnToTodoHandler(todo.id)}>취소</button>
        <div><Link to={`/Detail/${todo.id}`}>자세히</Link></div>
        </StBox>
        ))}  

       {/* done-area 태그가 여기서 닫힙니다.  */}
      </StArea>
       {/* done-text, done-area, done-box 묶음 태그가 여기서 닫힙니다. */}
      </div>
    )
}

export default DoneBox