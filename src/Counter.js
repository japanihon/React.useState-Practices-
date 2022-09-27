import React from 'react'

export default function Counter() {

const [counter, setCounter] = React.useState(0)

function sumaCounter() {
    setCounter(prevState => prevState + 1)
}

function restaCounter() {
    setCounter(prevState => prevState - 1)
}

  return (
    <div>
    
    <h1> {counter} </h1>
    <button
    style={{ backgroundColor: "pink", margin: 5}}
     onClick={sumaCounter} > + Counter </button>
    <br/>
    <button
    style={{ backgroundColor: "pink", margin: 5}}
     onClick={restaCounter} > - Counter </button>
    </div>
  )
}
