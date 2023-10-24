import React from 'react'
import { useState, useEffect } from 'react';

const ClearUpUseEffect = () => {

    const [widthCount, setwidthCount] = useState(window.screen.width);

    const currentScreenWidth = () =>{
        setwidthCount(()=>window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", currentScreenWidth);
        return ()=>{
            window.removeEventListener("resize", currentScreenWidth);
        }
    })

    return (
        <div>
            <div className="container">
                <h2>The size of the Window is <span>{widthCount}</span> </h2>
            </div>
        </div>
    )
}

export default ClearUpUseEffect;
