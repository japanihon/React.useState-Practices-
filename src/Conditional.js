import React from 'react'

export default function Conditional(){

const [condition, setCondition] = React.useState(true)

function changeCondition() {
setCondition(!condition)
}

function showMessage() {
    setCondition(!condition)
    }

  return (
    <div>
    <h1> Conditional </h1>
    <button onClick={changeCondition} >
       Change Condition
    </button>
     {condition
     ? <h1> I am True now </h1>
     : <h1> I am False now </h1>
     } 

     <button onClick={showMessage} >
       {condition ? "Hide Message" : "Show Message" }
    </button>
    {condition && <h1> Show Message </h1>
    }

    <h3> State value is {condition.toString()}</h3> 
    <hr/>
    </div>
  )
}
