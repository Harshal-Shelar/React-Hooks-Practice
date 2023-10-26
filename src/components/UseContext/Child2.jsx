import React, { useContext } from 'react'
import { GlobalInfo } from './Parent'

const Child2 = () => {

    const { appColor, getDay } = useContext(GlobalInfo);

    const day = "Sunday";

    return (
        <div>
            <h1 style={{ color: appColor }}>Child 2</h1>
            <button onClick={()=>getDay(day)}>Click Me</button>
        </div>
    )
}

export default Child2
