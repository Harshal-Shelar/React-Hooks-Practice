import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    const countUpdate = (val) => {
        if (val === "inc") return setCount(count + 1);
        if (val === "dec") return setCount(count - 1);
    }

    useEffect(() => {
        document.title = count;
    });

    return (
        <div>
            <div className='useState'>
                <div className='innerClass'>
                    <button className='incBtn' onClick={() => countUpdate("inc")}>+</button>
                    <h2 className='count'>{count}</h2>
                    <button className='decBtn' onClick={() => (count === 0) ? setCount(0) : setCount(count - 1)}>-</button>
                </div>
                <button className='decBtn' onClick={() => countUpdate("dec")}>Reset</button>
            </div>
        </div>
    )
}

export default UseEffect
