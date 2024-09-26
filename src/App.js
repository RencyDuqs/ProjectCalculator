
import './App.css';
import {useState}from "react";


function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({display}) {
  return (
    <div className="Display">
      0
      {display}
    </div>
  );
}

function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const[op,setOp] = useState(null);


  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    alert(value);
    
   
    setNum1(value);
   
    console.log(num1);

    setNum2(value);
    console.log(num2);

    setOp(value);
    console.log(op);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    alert(value);
    
    setNum1(value);
    console.log(num1);

    setNum2(value);
    console.log(num2);

    setOp(value);
    console.log(op);
  }

  const generickClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    alert(value);
  }
  
  return (
    <div className="App">
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display/>
        </div>
        <div className="ButtonsContainer">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"/"} clickHandler={numClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"*"} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={numClickHandler} />
          <Key label={"C"} clickHandler={numClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={numClickHandler} />
          <Key label={"+"} clickHandler={numClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
