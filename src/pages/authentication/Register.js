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
        <div className='container  mt-3'>
            <form onSubmit={add} >
                <div class="mb-2">
                    {/* <label class="form-label">Enter Full Name</label> */}
                    <input type="name"
                        class="form-control"
                        id="name"
                        placeholder='Full Name'
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value) }} />
                </div>
                <div class="mb-2">
                    {/* <label class="form-label">Email address</label> */}
                    <input type="email"
                        class="form-control"
                        id="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="mb-2">
                    {/* <label class="form-label">Password</label> */}
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='pt-1'>
                    <button type="submit" class="btn btn-primary w-50">Submit</button>&nbsp;
                    <Link to="/authentication/login" className='w-25 ms-5'>login</Link>&nbsp;
                </div>
            </form>
        </div>
    )
}

export default Register