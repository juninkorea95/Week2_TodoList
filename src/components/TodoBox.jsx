import { StText, StArea, StBox } from "styles/style"
import { Link } from "react-router-dom"

function TodoBox({todos, deleteButtonHandler, moveToDoneHandler}) {
    return (
      <div>
        
      <StText> To do π </StText>

      <StArea>
        
      {todos.filter(todo => todo.isDone === 0)
      .map(todo => (        
        <StBox key = {todo.id}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>μ­μ </button>
        <button onClick={()=> moveToDoneHandler(todo.id)}>μλ£</button>
        <div><Link to={`/Detail/${todo.id}`}>μμΈν</Link></div>
        </StBox>
        ))}
      
      </StArea>

      </div>
    )
}

export default TodoBox