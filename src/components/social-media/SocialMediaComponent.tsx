import React from 'react'
import './SocialMediaComponent.scss'
import { Link } from "react-router-dom"
import { SocialMediaComponentProps } from './Helper'

const SocialMediaComponent: React.FC<SocialMediaComponentProps> = ({ icons }) => {
    return (
        <div className='social-media-container'>
            {
                icons.map((iconDetails) => {
                    return (
                        <Link to={iconDetails.link} key={iconDetails.alt}>
                            <img src={iconDetails.icon} className='icon' alt={iconDetails.alt}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SocialMediaComponent