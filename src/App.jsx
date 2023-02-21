import { useState } from 'react'

import './App.css'

function App() {
  const [ number, setNumber ] = useState("");
  const [ total, setTotal ] = useState();

  console.log(total)
  const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = [ "/","+","-","*" ]
  // let total = 0
  const handleClick = (e) => {
    e.preventDefault() 
    setNumber(number => number + e.target.name) 
    console.log(Number(total))
  }

  const handleCalculation = (e) => {
    e.preventDefault()
    if (e.target.name = "+") {
      setTotal(currTotal => currTotal + Number(e.target.name))
    } else if (e.target.name = "-") {
        setTotal(currTotal => currTotal - Number(e.target.name))
    }
  }
  const numsMap = nums.map((num, index) => (
    <div id={index}>
      <button name={num} onClick={handleClick}>{num}</button> 
    </div>
  ))

  const operationsMap = operations.map((operation, index)=> (
    <div id={index}>
    <button name={operation} onClick={handleClick}>{operation}</button> 
  </div>
  ))
  const clearTotal = (e) => {
    e.preventDefault()
    setTotal('')
    setNumber('')
    console.log(total)
  }


  return (
    <div className="App">
      <h1> My Calculator App</h1>
      <h3>{number}</h3>
      <div>
        {numsMap}
      </div>
      <div>{operationsMap}</div>
      <div>
        <button onClick={clearTotal}>Clear</button>
      </div>
    </div>
  )
}

export default App
