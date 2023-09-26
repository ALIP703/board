import React from 'react'
import "./Sidebar.scss"
import { SidebarProps } from './Helper'
import ListItem from '../list/ListItem'

const Sidebar: React.FC<SidebarProps> = ({ sidebarItems }) => {

    return (
        <div className="sidebar primary">
            <div>Board</div>
            <ul>
                {
                    sidebarItems.map((sidebarItem) => {
                        return (
                            <ListItem
                                key={sidebarItem.item}
                                title={sidebarItem.item}
                                icon={sidebarItem.icon}
                                route={sidebarItem.route}
                            />
                        )
                    })
                }
            </ul>
            <ul>
                <ListItem
                    title='Help'
                    route=''
                />
                <ListItem
                    title='Contact us'
                    route=''
                />
            </ul>
        </div>
    )
}

export default Sidebar