import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FRAME = styled.div`
  display: flex;
  margin : 0 auto;
  justify-content: center;
  align-items: center;
  width:1500px;
  height: 800px;
`

const STBOX = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const RETURN = styled.div`
margin-top: 20px;
`

function Detail() {
  const todos = useSelector((state) => state.todos);
  const param = useParams();

  const detail = todos.find(todo => todo.id === parseInt(param.id))

  return (
  <FRAME>
    <STBOX>
    
      id : {detail.id}
      <br />
      제목 : {detail.title}
      <br />
      내용 : {detail.content}
      <br />
      
    <RETURN>
      <Link to="/">이전으로</Link>
    </RETURN>
    
    </STBOX>
  </FRAME>
  )
}

export default Detail