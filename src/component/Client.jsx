import React, { useEffect, useState } from 'react';
import clientdata from '../datas/clientdata';
import NotTeenager from './NotTeenager';
import Teenager from './Teenager';

function Client() {

    const [allclientdata, setAllClientData] = useState();

    useEffect(()=>{
        setAllClientData(clientdata)
        console.log("더미 데이터 :",clientdata)
        // 전체적으로 콘솔이 두번씩 찍히는데 왜 그런거지?

    },[])

    return (
      <div>
        {
          allclientdata && allclientdata.map((allclient)=>(
            <div key = {allclient.id} >
              {
                allclient.age < 20 ?
                  
                  <Teenager teenager = {allclient} />
                  : <NotTeenager notteenager = {allclient}/>
              }
            </div>
          ))
        }
      </div>
    )
}

export default Client