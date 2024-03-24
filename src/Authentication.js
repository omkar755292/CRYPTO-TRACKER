import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import GoogleButton from 'react-google-button'
import Avtar from './components/Avtar'
import { useUserAuth } from './context/UserAuthContext'

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
        <div className='d-flex justify-content-center m-4'>
            <div>

                <Avtar />
                <Routes >
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

                <div className='d-flex flex-column justify-content-center'>
                    <GoogleButton onClick={handleGoogleLogin} className='mt-3' type='light' />
                    <button onClick={forgetPasswordHandler} class="btn btn-link">Forget Password</button>
                </div>

            </div>
        </div>
    )
}

export default Authentication