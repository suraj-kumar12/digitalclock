

import React, { useState } from 'react';

const App = () => {

  const [update, setUpdate] = useState(0);
  const increase = (event) => {  
      setUpdate(event.target.value)
      setUpdate(update + 1);
  }

  const decrease = () => {
    setUpdate(update - 1);
  }
    
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{update}</h1>
          <div className="main_btn">
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;