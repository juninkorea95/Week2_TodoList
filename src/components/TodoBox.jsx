import { StArea, StBox, StText } from "App"

function TodoBox({todos, deleteButtonHandler, moveToDoneHandler}) {
    return (
      <div>
        {/* To do 텍스트 부분만 하나의 영역으로 만들어서 정렬시켜줌..스타일링이 너무 많이 들어감. */}
      <StText> To do 😊 </StText>

      {/* 이곳에 todo-area 에 대한 것을 정의한다.  */}
      <StArea>
        {/* 이곳이 todobox를 정의하는 곳 */}
      {/* 내가 했던 실수 : mapping을 한 뒤 그 안에 todobox를 꾸몄어야 했는데 거꾸로해버렸다.. */}
      {/* 논리의 흐름 : 입력한 정보를 mapping하여 나열한 뒤에 박스 안에 배치하는 스타일링을 하는 것이다.
      박스들이 만들어진 다음에 정보가 들어가는 게 아님!! */}
      {todos.filter(todo => todo.isDone === 0)
      .map(todo => (        
        <StBox key = {todo.id}>  
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <button onClick={() => deleteButtonHandler(todo.id)}>삭제</button>
        <button onClick={()=> moveToDoneHandler(todo.id)}>완료</button>
        </StBox>
        ))}
      
      {/* todo-area 가 닫히는 태그 */}
      </StArea>
      
      
      {/* todo-text , todo-area, todo-box 삼총사 다 묶는 div 닫는 태그 */}
      </div>
    )
}

export default TodoBox