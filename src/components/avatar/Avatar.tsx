import React from 'react'
import { AvatarProps } from './Helper'
import "./Avatar.scss"
const Avatar: React.FC<AvatarProps> = ({ image, style }) => {

    return (
        <div className='avatar' style={style}>
            <img src={image} alt='avatar' />
        </div>
    )
}

export default Avatar