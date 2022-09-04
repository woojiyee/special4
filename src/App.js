import Client from './component/Client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client1 from './component/Client1';
import Client2 from './component/Client2';
import Client3 from "./component/Client3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Client/>}/>
          <Route path = "/1" element ={<Client1/>}/>
          <Route path = "/2" element ={<Client2/>}/>
          <Route path = "/3" element ={<Client3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
