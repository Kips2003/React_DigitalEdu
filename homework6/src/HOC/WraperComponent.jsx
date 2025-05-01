import React, { useState } from 'react'

const WraperComponent = (OriginalComponent) => {
  return function Wrapper(){

    const [counter, setcounter] = useState(0);
    return <>
        <OriginalComponent counter={counter} setcounter={setcounter}/>
    </>
  }
}

export default WraperComponent