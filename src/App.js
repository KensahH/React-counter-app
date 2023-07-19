import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  const[count, setCount] = useState(0)

const handleDecrement=()=>{

  setCount(count-1)
}
const handleIncrement=()=>{
  setCount(count +1)
}
const handleReset=()=>{
setCount(0)

}
  return (
    <div>
      <div className="count">{count}</div>
      <button  onClick={handleDecrement}className="decreaseBtn"> decrease</button>
      <button onClick={handleReset} className="resetBtn"> reset</button>
      <button onClick={handleIncrement}className="increaseBtn">increase</button>

    </div>
  );
}
