import React,{useState} from 'react';
import './App.css';

function App() {
  let[state,setstate]=useState(0)
  function all(op){
    if(op=="one"){
      setstate(state+5)
    }
    else if(op=="two"){
      setstate(state-3)
    }
    else if(op=="three"){
     setstate(0)
    }
    // console.log(e)
  }
  return (
    <div className="App">
      <button onClick={()=>all("one")}>Add +5</button>
      <button onClick={()=>all("two")}>sub -3</button>
      <button onClick={()=>all("three")}>Clear</button>
      <h2>{state}</h2>
    </div>
  );
}

export default App;
