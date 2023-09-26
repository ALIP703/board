declare type SidebarItem = {
    icon: string,
    item: string,
    route: string
}
export interface SidebarProps {
    sidebarItems: SidebarItem[]
}