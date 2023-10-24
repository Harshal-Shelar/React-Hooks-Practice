import React from 'react'
import { useState } from 'react'

const UseStateObject = () => {
    const [formData, setFormData] = useState({
        username : "",
        email : "",
        password : "",
        phone : "",
    })

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prev) => {
            return {...prev, [name] : value};
        })
    }
    return (
        <div className='container'>
            <div className="card">
                <h2 className='card-title text-center'>Register</h2>
                <div className='card-body py-md-4'>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className='form-control'
                                name="username"
                                id="name"
                                placeholder='name'
                                autoComplete='off'
                                value={formData.username}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email"
                                className='form-control'
                                name="email"
                                id="email"
                                placeholder='Email'
                                autoComplete='off'
                                value={formData.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password"
                                className='form-control'
                                name="password"
                                id="password"
                                placeholder='Password'
                                autoComplete='off'
                                value={formData.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="number"
                                className='form-control'
                                name="phone"
                                id="phone"
                                placeholder='Phone'
                                autoComplete='off'
                                value={formData.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <div className='d-flex flex-row align-items-center justify-content-between'>
                            <button className='btn btn-primary'>Create Account</button>
                        </div>
                    </form>
                    <div>
                        <p>{`My Name is ${formData.username} and Email is ${formData.email}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseStateObject
