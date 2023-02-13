
function TopBox() {
    return <div className='Top-Box' style = {{
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

}
        
export default TopBox
