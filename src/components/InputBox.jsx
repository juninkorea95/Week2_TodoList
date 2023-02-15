function InputBox({title, content, titleChange, contentChange, submitButtonHandler}) {
    return <div className='Input-Box' style = {{    
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
      
      {/* 제목 빈칸 --> 이곳에서 쓰여지는 값을 추출해서 아래 구역에 옮겨줘야한다. */}
      <input className='input-button' 
      type = "text"
      value = {title}
      onChange = {titleChange}  // titleChange라는 함수가 무엇인지는 js영역에서 설명이 되어야한다. 
      />

      {/* 내용 텍스트와 빈칸 생성 */}
      <label className='input-label' style={{
      fontFamily: '"Noto Sans KR", sans-serif',
      marginRight: '10px',
      marginLeft: '10px',
      fontWeight: 'bold'
      }}>내용:</label>
      
      {/* 내용 빈칸 --> 이곳에서 쓰여지는 값을 추출해서 아래 구역에 옮겨줘야한다. */}
      <input className='input-button' 
      type = "text"
      value = {content}
      onChange = {contentChange}  // titleChange라는 함수가 무엇인지는 js영역에서 설명이 되어야한다. 
      />

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
      }} onClick = {submitButtonHandler}>추가</button>
    </div>
}

export default InputBox