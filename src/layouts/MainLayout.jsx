import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout
