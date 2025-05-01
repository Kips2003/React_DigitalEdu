import React from 'react'
import { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

    const IncrementHandler = () => {
        setCounter(counter + 1);
    }
    
    useEffect(() => {
        document.title = `Counter: ${counter}`;
        return() => {
            document.title = 'React App';
            
        }
    }, [counter]);
    
    console.log(1);

    return (
    <div>
        <h1>Counter component</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={() => setIsDisabled(!isDisabled)}>Disable</button>
    </div>
  )
}

export default Counter