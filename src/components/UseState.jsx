import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count , setCount] = useState(0);

    return (
        <div className='useState'>
            <div>
                <button className='incBtn' onClick={()=> setCount(count + 1)}>+</button>
            </div>
            <div className='count'>{count}</div>
            <div>
                <button className='decBtn' onClick={()=> (count === 0) ? setCount(0) : setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default UseState
