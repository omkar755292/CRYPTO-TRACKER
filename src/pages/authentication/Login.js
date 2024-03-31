import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useUserAuth();
    const navigate = useNavigate();

    const add = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            setEmail('');
            setPassword('');
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <form className='auth-form' onSubmit={add}>
            <div >
                <input type="email"
                    class="form-control"
                    placeholder='Email Address'
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div >
                <input
                    type="password"
                    placeholder='Password'
                    class="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className='auth-form-btn' >
                <button type="submit" class="">
                    Submit</button>&nbsp;
                <Link to="/authentication/register" >Register</Link>&nbsp;
            </div>
        </form>
    )
}

export default Login