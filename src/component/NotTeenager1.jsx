import React from 'react'

function NotTeenager1({notteenagearray}) {
    console.log("성인 프롭스 데이터:", notteenagearray)
  return (
    <div>
         <h1> 성인 고객 정보</h1>
        {
            notteenagearray && notteenagearray.map (notteenager =>(
                <div key = {notteenager.id}>
                    <br/>                    
                    <div> 이름: {notteenager.name}</div>
                    <div> 나이: {notteenager.age}</div>
                    <div> 회원 번호: {notteenager.clientnumber}</div>
                    <hr/>
                    <br/>
                </div> 

            ))
        }
    </div>
  )
}

export default NotTeenager1