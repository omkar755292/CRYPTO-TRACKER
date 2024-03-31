import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { register } = useUserAuth();

    const add = async (e) => {
        e.preventDefault();
        try {

            await register(email, password, fullName);
            setFullName('');
            setEmail('');
            setPassword('');
            navigate('/login');

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <form className='auth-form' onSubmit={add} >
            <div>
                <input type="name"
                    class="form-control"
                    id="name"
                    placeholder='Full Name'
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value) }} />
            </div>
            <div>
                <input type="email"
                    class="form-control"
                    id="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div >
                <input
                    class="form-control"
                    type="password"
                    id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className='form-btn' >
                <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                <Link to="/authentication/login" >login</Link>
            </div>
        </form>
    )
}

export default Register