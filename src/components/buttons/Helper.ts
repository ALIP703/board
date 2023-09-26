export interface ButtonProps {
    title: string
    icon?: string
    color?: "primary" | "error" | 'warning' 
    handleClick: () => void
    style?: React.CSSProperties
}