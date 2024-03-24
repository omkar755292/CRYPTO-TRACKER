import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {

  const { user } = useUserAuth();
  return (
    <div>
      <h1>Name: {user.displayName}</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Home