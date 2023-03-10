import { StText, StArea, StBox } from "styles/style"
import { Link } from "react-router-dom"

function DoneBox ({todos, deleteButtonHandler, returnToTodoHandler}) {
    return (
        <div>
      <StText> Done π </StText>
      
      <StArea>

      {todos.filter(todo => todo.isDone === 1)
      .map(todo => (        
        <StBox key = {todo.id}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>μ­μ </button>
        <button onClick={() => returnToTodoHandler(todo.id)}>μ·¨μ</button>
        <div><Link to={`/Detail/${todo.id}`}>μμΈν</Link></div>
        </StBox>
        ))}  

      </StArea>
      </div>
    )
}

export default DoneBox