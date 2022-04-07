import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2> Silahkan masuk </h2>
                {(error !== "") ? (<div className='error'> {error} </div>) : ("")}
                <div className='form-group'>
                    <input type="text" name='username' id='username' placeholder='Username' onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                </div>
                <div className='form-group'>
                    <input type="password" name='password' id='password' placeholder='Password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <div className='form-group'>
                    {/* <Link to="/dashboard" className="btn-login">Login</Link> */}
                    <button type="submit" value="login" >Login </button>
                </div>
            </div>
        </form>
    )
}
