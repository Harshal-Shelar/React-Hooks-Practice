import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from './Parent'
import Child2 from './Child2'

const Child1 = () => {
    const {appColor} = useContext(GlobalInfo)
  return (
    <div>
      <h1 style={{color: appColor}}>Child 1</h1>
      <Child2 />
    </div>
  )
}

export default Child1
