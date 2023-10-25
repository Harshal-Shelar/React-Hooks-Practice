import React from 'react'

const Props2 = (props) => {
    const name = props.name;
    const tool = props.tool;
    const dataJson = props.jsonData;
    return (
        <div>
            <h1>My name is {name}.</h1>
            <p>My favorite design tool is {tool}.</p>
            <h3>My name is {dataJson.name}</h3>
            <h3>Age is {dataJson.age}</h3>
            <h3>Salary amount is {dataJson.salary}</h3>
        </div>
    )
}

export default Props2
