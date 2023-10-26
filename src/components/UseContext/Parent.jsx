import React, { createContext, useState } from 'react'
import Child1 from './Child1';

export const GlobalInfo = createContext();

const Parent = () => {

    const [color, setColor] = useState("red");
    const [day, setDay] = useState("Monday");

    const getDay = (item) => {
        console.log(item);
        setDay(item)
    }

    return (
        <GlobalInfo.Provider value={{ appColor: color , getDay : getDay}}>
            <div>
                <h1>App Component {day}</h1>
                <Child1 />
            </div>
        </GlobalInfo.Provider>
    )
}

export default Parent
