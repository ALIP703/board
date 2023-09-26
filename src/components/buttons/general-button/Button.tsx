import React from "react"
import { ButtonProps } from "../Helper"
import "./Button.scss"

const Button: React.FC<ButtonProps> = ({ style, color, title, icon, handleClick }) => {
    return (
        <button
            style={style}
            title={title}
            className={`button-with-icon ${color}`}
            onClick={handleClick}
        >
            {
                icon && <span className="icon">
                    <img src={icon} alt={title} />
                </span>
            }
            {title}
        </button>
    )
}

export default Button