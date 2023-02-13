import React from 'react'

function App() {


  return (
    <div>
      {/* 맨 위에 Top-Box를 정의하는 부분 */}
      <div className='Top-Box' style = {{
        // styled-components 로 Top-Box 전체에 대한 스타일링을 여기에 해줌
        backgroundColor: 'pink',
        width: '1200px',
        height: '50px',
        border: '1px solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
      }}>

        {/* Top-Box Division에 들어가는 내용을 정의함 */}
        <div className ="left-text">My Todo List</div>
        <div className ="right-text">React</div>
      </div>

      {/* 이 곳에 title, content, submitButton이 들어간 input-box 영역을 만듭니다.  */}
      <div className='Input-Box' style = {{
        
          // 제목, 내용, 추가 버튼을 포괄하는 전체 박스(Input-Box)에 대한 스타일링은 이것으로!

          width: '1200px',
          height: '100px',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          paddingLeft: '10px',
          paddingRight: '10px',
          margin: '0 auto',
          marginBottom: '10px'
      }}>

        {/* 제목 텍스트와 빈칸 생성 */}

        <label className='input-label' style={{
        fontFamily: '"Noto Sans KR", sans-serif',
        marginRight: '10px',
        marginLeft: '10px',
        fontWeight: 'bold'
        }}> 제목:</label>
        
        {/* 제목 빈칸 */}
        <input className='input-button' type = "text"/>

        {/* 내용 텍스트와 빈칸 생성 */}
        <label className='input-label' style={{
        fontFamily: '"Noto Sans KR", sans-serif',
        marginRight: '10px',
        marginLeft: '10px',
        fontWeight: 'bold'
        }}>내용:</label>
        
        {/* 내용 빈칸 */}
        <input className='input-button' type = "text"/>

        {/* 제출 버튼 생성 */}
        <button className="submit-button" style = {{
          backgroundColor: 'rgb(108, 175, 108)',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'right',
          marginLeft: '30px',
        }}>추가</button>
      </div>

      {/* 여기서부터 추가를 누르면 추가되는 box가 모이는 todo area */}

      {/* To do 텍스트 부분만 하나의 영역으로 만들어서 정렬시켜줌..스타일링이 너무 많이 들어감. */}
      <div className='todoText' style = {{
          fontFamily: '"Oswald", sans-serif',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          width: '1200px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          backgroundColor: 'yellow'
      }}> To do 😊 </div>

      {/* 이곳에 todo-area 에 대한 것을 정의한다.  */}
      <div className='todo-area' style = {{
        backgroundColor: 'skyblue',
        width: '1200px',
        minHeight: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
        marginBottom: '10px',
      }}>

      </div>

      {/* 여기는 완료를 눌러 아래로 이동한 box가 모이는 done area  */}
      
      <div className='doneText' style = {{
          fontFamily: '"Oswald", sans-serif',
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
          width: '1200px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          backgroundColor: 'yellow'
      }}> Done 😆 </div>
      
      <div className='done-area' style = {{
        backgroundColor: 'skyblue',
        width: '1200px',
        minHeight: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        margin: '0 auto',
      }}>

      </div>

      </div>
  )
}

export default App

  
  
  