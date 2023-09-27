import React from 'react'
import "./Card.scss"
import { CardProps } from './Helper'

const Card: React.FC<CardProps> = ({ children,className, height, width, style }) => {
    return (
        <div className={`card ${className}`} style={{ width, height ,...style}}>
            {children}
        </div>
    )
}

export default Card