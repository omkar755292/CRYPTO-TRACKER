import React from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import GoogleButton from 'react-google-button'
import { useUserAuth } from './context/UserAuthContext'
import { AbcLogo } from './components/Images'

const Authentication = () => {


    const { loginWithGoogle, forgetPassword } = useUserAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithGoogle();
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }
    }

    const forgetPasswordHandler = async (e) => {
        e.preventDefault();
        try {
            const email5 = prompt('please enter email');
            await forgetPassword(email5);
            alert("Chenck Email")
        } catch (error) {
            alert(error.message);
        }
    }

    return (

        <div className='auth-page'>
            <div className='auth-container'>
                <div className='abc-badge'>{AbcLogo}</div>
                <div>
                <Routes >
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                </div>

                <div className='google-button'>
                    <GoogleButton onClick={handleGoogleLogin} type='light' />
                    <button onClick={forgetPasswordHandler} class="btn btn-link">Forget Password</button>
                </div>
                
            </div>
        </div>
    )
}

export default Authentication