
function TopBox() {
    return <div className='Top-Box' style = {{
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

        <div className ="left-text">My Todo List</div>
        <div className ="right-text">React</div>
      </div>

}
        
export default TopBox
