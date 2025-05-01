import React from 'react'
import WraperComponent from '../HOC/WraperComponent'

const Hello = ({counter}) => {
  return (
    <div>
        <h1>Counter: {counter}</h1>
    </div>
  )
}

export default WraperComponent(Hello)