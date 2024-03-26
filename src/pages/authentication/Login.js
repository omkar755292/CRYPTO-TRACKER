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
        <div className='container mt-3 justify-content-center'>
            <form onSubmit={add}>
                <div class="mb-2">
                    {/* <label class="form-label">Email address</label> */}
                    <input type="email"
                        class="form-control"
                        placeholder='Email Address'
                        id="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="mb-2">
                    {/* <label class="form-label">Password</label> */}
                    <input
                        type="password"
                        placeholder='Password'
                        class="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='pt-1'>
                    <button type="submit" class="btn btn-primary w-50">Submit</button>&nbsp;
                    <Link to="/authentication/register" className='w-25 ms-5'>Register</Link>&nbsp;
                </div>
            </form>
        </div>
    )
}

export default Login