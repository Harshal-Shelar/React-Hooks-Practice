import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [userInput ,  setUserInput] = useState("");
    
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    })

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)} />
            <p>The number of times comp render : {count.current}</p>
        </div>
    )
}

export default UseRef;
