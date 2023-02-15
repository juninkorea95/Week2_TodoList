import { StArea, StBox, StText } from "pages/Home"
import { Link } from "react-router-dom"

function TodoBox({todos, deleteButtonHandler, moveToDoneHandler}) {
    return (
      <div>
        
      <StText> To do 😊 </StText>

      {/* 이곳에 todo-area 에 대한 것을 정의한다.  */}
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
      
      {/* todo-area 가 닫히는 태그 */}
      </StArea>
      
      
      {/* todo-text , todo-area, todo-box 삼총사 다 묶는 div 닫는 태그 */}
      </div>
    )
}

export default TodoBox