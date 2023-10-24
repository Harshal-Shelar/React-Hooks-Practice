import React, { useReducer } from 'react'
import reducer from './reducer';

const initialValue = 0;

const ReducerHook = () => {

    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <div className='useState'>
                <div className='innerClass'>
                    <button className='incBtn' onClick={() => dispatch({type : "INC"})}>+</button>
                    <h2 className='count'>{count}</h2>
                    <button className='decBtn' onClick={() => dispatch({type : "DEC"})}>-</button>
                </div>
                {/* <button className='decBtn' onClick={() => dispatch({type : "DEC"})}>Reset</button> */}
            </div>
        </div>
    )
}

export default ReducerHook;
