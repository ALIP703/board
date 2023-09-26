import React from 'react'
import './SearchBox.scss'
import IconButton from '../buttons/icon-button/IconButton'
import SearchIcon from "../../assets/search.svg"

const SearchBox: React.FC = () => {
    return (
        <>
            <input
                type="search"
                placeholder="Search..."
                aria-label="Search"
            />
            <IconButton
                icon={SearchIcon}
                handleClick={() => { }}
                title='Search'
                style={{
                    position: 'absolute',
                    width: '24px',
                    height: '24px',
                    transform: 'translate(-55px, -12px)'
                }}
            />
        </>
    )
}

export default SearchBox