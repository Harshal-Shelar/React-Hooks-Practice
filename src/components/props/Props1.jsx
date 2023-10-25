import React from 'react'
import Props2 from './Props2'

const Props1 = () => {
    const jsonData = {
        name : 'harshal',
        age : 25,
        email : 'harshalshelar8251@gmail.com',
        salary : '65000'
    }
  return (
    <div>
      <Props2 jsonData = {jsonData} name="Ihechikara" tool="Figma"/>
    </div>
  )
}

export default Props1;
