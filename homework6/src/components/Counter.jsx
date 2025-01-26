import React from 'react'
import WraperComponent from '../HOC/WraperComponent'

const Counter = ({counter, setcounter}) => {

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}> Increment</button>
    </div>
  )
}

export default WraperComponent(Counter)