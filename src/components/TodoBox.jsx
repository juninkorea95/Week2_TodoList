import { StText, StArea, StBox } from "styles/style"
import { Link } from "react-router-dom"

function TodoBox({todos, deleteButtonHandler, moveToDoneHandler}) {
    return (
      <div>
        
      <StText> To do 😊 </StText>

      <StArea>
        
      {todos.filter(todo => todo.isDone === 0)
      .map(todo => (        
        <StBox key = {todo.id}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>삭제</button>
        <button onClick={()=> moveToDoneHandler(todo.id)}>완료</button>
        <div><Link to={`/Detail/${todo.id}`}>자세히</Link></div>
        </StBox>
        ))}
      
      </StArea>

      </div>
    )
}

export default TodoBox