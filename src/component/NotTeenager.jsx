import React from 'react'

function NotTeenager({notteenager}) {
    console.log("성인 프롭스 데이터:", notteenager)
  return (
    <div>
        <br/>
        <h1> 성인 고객 정보</h1>
        <div> 이름: {notteenager.name}</div>
        <div> 나이: {notteenager.age}</div>
        <div> 회원 번호: {notteenager.clientnumber}</div>
        <br/>
        <hr/>
</div>
  )
}

export default NotTeenager