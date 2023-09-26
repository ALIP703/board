import React from 'react'
import { Link } from "react-router-dom"
import { ListItemProps } from './Helper'

const ListItem: React.FC<ListItemProps> = ({ title, route, icon, style }) => {

    return (
        <li style={style}>
            <Link to={route}>
                {
                    icon && <img src={icon} alt={title} />
                }
                {title}
            </Link>
        </li>
    )
}

export default ListItem