## React Basic Counter ##


```Javascript

import React, { useState } from 'react'; 

import ReactDOM from 'react-dom/client';

function Counter() {

  let [count, setCount] = useState(0)

    return (
      <div>
        <h1> React Basic Counter </h1>
        <button onClick={() => {
          setCount(count - 1);
        }}>-</button>
        {count}
        <button onClick={() => {
          setCount(count + 1);
        }}>+</button>
      </div>
    );
}

const domElement = document.getElementById('root')

ReactDOM.createRoot(domElement).render(<Counter />)

```
![Captura de Pantalla 2022-10-04 a la(s) 22 40 14](https://user-images.githubusercontent.com/77374408/193961381-df01da46-277a-4112-968e-852c06f9713f.jpg)

