import React, { useEffect, useState } from 'react';
import clientdata from '../datas/clientdata';
import NotTeenager1 from './NotTeenager1';
import Teenager1 from './Teenager1';

function Client1() {

    const [allclientdata, setAllClientData] = useState();

    const teenagerArray = [];
    const notteenagerArray = [];


    useEffect(()=>{
        setAllClientData(clientdata)
        console.log("더미 데이터 :",clientdata)

    },[])

    allclientdata && allclientdata.map((allclient)=>(
          allclient.age < 20 ?
            teenagerArray.push(allclient)
            : notteenagerArray.push(allclient)
    ))

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

export default Client1