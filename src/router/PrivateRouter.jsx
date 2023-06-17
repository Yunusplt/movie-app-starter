import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContexx } from '../context/AuthContext'

const PrivateRouter = () => {

    const {currentUser} = useContext(AuthContexx)

  return currentUser ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter