import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div >
            <div className='useState'>
                <div className='innerClass'>
                    <button className='incBtn' onClick={() => setCount(count + 1)}>+</button>
                    <h2 className='count'>{count}</h2>
                    <button className='decBtn' onClick={() => (count === 0) ? setCount(0) : setCount(count - 1)}>-</button>
                </div>
                <button className='decBtn' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default UseState
