import React from 'react'

export default function Error() {

const [error, setError] = React.useState("")

function handleError() {
    setError("Api Error")
}

  return (
      <div>
    <button onClick={handleError}>
       Api
     </button>
    {error && <h1> {error} </h1>}
    <hr/>
  </div>

  )
}

