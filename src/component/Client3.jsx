import React, { useEffect, useState } from 'react';
import clientdata from '../datas/clientdata';
import CustomerList from './Customer';

function Client3() {

    const [allclientdata, setAllClientData] = useState();
    
    const teenagerArray = [];
    const notteenagerArray = [];

    useEffect(()=>{
        setAllClientData(clientdata)
        console.log("더미 데이터 :",clientdata)

    },[])


    allclientdata && allclientdata.forEach((client) => {
        if (client.age < 20) {
            teenagerArray.push(client);
        } else {
            notteenagerArray.push(client);
        }
    })
    //age가 20 미만인 데이터는 teenagerArray에
    //age가 20 이상인 데이터는 notteenagerArra에 담김


    return (
      <div>
        {
          allclientdata && 
          <div>
            <CustomerList title="청소년 고객 정보" customers = {teenagerArray} />
            <CustomerList title="성인 고객 정보" customers = {notteenagerArray}/>
          </div>
        }
      </div>
        
        
    )
}

export default Client3