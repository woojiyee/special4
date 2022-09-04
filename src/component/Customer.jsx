import React from 'react'

function CustomerList({title, customers }) {
  return (
    <div>
        <h1> {title}</h1>
        {
            customers && customers.map ( customer =>(
                <div key = {customer.id}>
                    <br/> 
                    <div> 이름: {customer.name}</div>
                    <div> 나이: {customer.age}</div>
                    <div> 회원 번호: {customer.clientnumber}</div>
                    <hr/>
                    <br/>                    
                </div> 
            ))
        }
    </div>
  )
}

export default CustomerList