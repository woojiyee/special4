import React from 'react'

function Teenager({teenager}) {
    console.log("청소년 프롭스 데이터:", teenager)

  return (
    <div>
        <br/>
        <h1> 청소년 고객 정보</h1>
        <div> 이름: {teenager.name}</div>
        <div> 나이: {teenager.age}</div>
        <div> 회원 번호: {teenager.clientnumber}</div>
        <br/>
        <hr/>
    </div>
  )
}

export default Teenager