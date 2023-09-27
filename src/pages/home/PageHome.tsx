import React from 'react'
import { Outlet } from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar'
import { SIDEBAR_ITEMS } from '../../utils/helpers/constants/Constants'
import "./PageHome.scss"
import Navbar from '../../components/navbar/Navbar'
const PageHome: React.FC = () => {
    return (
        <div className='grid-container'>
            <Navbar />
            <Sidebar sidebarItems={SIDEBAR_ITEMS} />
            <div className='main'>
                <Outlet />
            </div>
        </div>

    )
}

export default PageHome