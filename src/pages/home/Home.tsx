import React from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar'
import { SIDEBAR_ITEMS } from '../../utils/helpers/constants/Constants'
import "./PageHome.scss"
import Navbar from '../../components/navbar/Navbar'
const Home: React.FC = () => {
    return (
        <div className='grid-container'>
            <Navbar />
            <Sidebar sidebarItems={SIDEBAR_ITEMS} />
            <Outlet />
        </div>

    )
}

export default Home