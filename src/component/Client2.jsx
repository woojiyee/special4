import React, { useEffect, useState } from 'react';
import clientdata from '../datas/clientdata';
import NotTeenager1 from './NotTeenager1';
import Teenager1 from './Teenager1';

function Client2() {

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


    return (
      <div>
        {
          allclientdata && 
          <div>
            <Teenager1 teenagerarray = {teenagerArray} />
            <NotTeenager1 notteenagearray = {notteenagerArray}/>
          </div>
        }
      </div>
        
        
    )
}

export default Client2