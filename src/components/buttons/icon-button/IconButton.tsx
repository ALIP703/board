import React from 'react'
import { ButtonProps } from '../Helper'
import "./IconButton.scss"

const IconButton: React.FC<ButtonProps> = ({ title, handleClick, icon, style }) => {
    return (
        <div onClick={handleClick} className='icon-button'>
            <img
                src={icon}
                alt={title}
                width="30px"
                height="24px"
                style={style}
            />
        </div>
    )
}

export default IconButton