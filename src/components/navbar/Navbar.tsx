import React, { useState } from 'react'
import './Navbar.scss'
import IconButton from '../buttons/icon-button/IconButton'
import NotificationIcon from "../../assets/notification.svg"
import SearchBox from '../search-box/SearchBox'
import { useLocation } from "react-router-dom"
import Avatar from '../avatar/Avatar'
import ProfilePicture from "../../assets/profile-pic.png"

const Navbar: React.FC = () => {

    const location = useLocation();
    const [navbarTitle, setNavbarTitle] = useState<string>()
    
    React.useEffect(() => {
        setNavbarTitle(location.pathname.split('/')[2] ?? 'Dashboard')
    }, [location.pathname])


    return (
        <nav className='navbar'>
            <div>
                <h3>{navbarTitle}</h3>
            </div>
            <div>
                <SearchBox />
                <IconButton
                    handleClick={() => { }}
                    title='Notifications'
                    icon={NotificationIcon}
                />
                <Avatar image={ProfilePicture} />
            </div>
        </nav>
    )
}

export default Navbar