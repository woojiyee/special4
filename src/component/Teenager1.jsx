import React from 'react'

function Teenager1({teenagerarray}) {
    console.log("청소년 프롭스 데이터:", teenagerarray)


  return (
    <div>
        <h1> 청소년 고객 정보</h1>
        {
            teenagerarray && teenagerarray.map ( teenager =>(
                <div key = {teenager.id}>
                    <br/> 
                    <div> 이름: {teenager.name}</div>
                    <div> 나이: {teenager.age}</div>
                    <div> 회원 번호: {teenager.clientnumber}</div>
                    <hr/>
                    <br/>                    
                </div> 
            ))
        }
    </div>
  )
}

export default Teenager1