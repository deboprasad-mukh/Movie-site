
import './App.css';
import Row from './Row';
import request from './request';
import Hoarding from "./Hoarding";

function App(){

 
  return (
    
    <div className="app">
     
      <Hoarding/>
      <Row title="Action Movies" fetchURL={request.page1}/>
      <Row title="Prime Special" fetchURL={request.page2}/>
      <Row title="Popular Movies" fetchURL={request.page3}/>

    </div>
  );
}


export default App;
