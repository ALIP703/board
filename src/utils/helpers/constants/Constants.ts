// Icons
import gitHubIcon from '../../../assets/social-media-icons/github.svg'
import twitterIcon from '../../../assets/social-media-icons/twitter.svg'
import linkedInIcon from '../../../assets/social-media-icons/linked-in.svg'
import discordIcon from '../../../assets/social-media-icons/discord.svg'
import settingsIcon from '../../../assets/sidebar-icons/setting.svg'
import usersIcon from '../../../assets/sidebar-icons/user.svg'
import scheduleIcon from '../../../assets/sidebar-icons/schedule.svg'
import transactionIcon from '../../../assets/sidebar-icons/transaction.svg'
import dashboardIcon from '../../../assets/sidebar-icons/dashboard.svg'

import { SocialMediaComponentProps } from '../../../components/social-media/Helper'
import { SidebarProps } from '../../../components/sidebar/Helper'

export const SOCIAL_MEDIA_ICONS: SocialMediaComponentProps['icons'] = [
    {
        icon: gitHubIcon,
        link: '',
        alt: 'GitHub'
    },
    {
        icon: twitterIcon,
        link: '',
        alt: 'Twitter'
    },
    {
        icon: linkedInIcon,
        link: '',
        alt: 'LinkedIn'
    },
    {
        icon: discordIcon,
        link: '',
        alt: 'Discord'
    }
]

export const SIDEBAR_ITEMS: SidebarProps['sidebarItems'] = [
    {
        icon: dashboardIcon,
        item: 'Dashboard',
        route: 'dashboard'
    },
    {
        icon: transactionIcon,
        item: 'Transactions',
        route: 'transactions'
    },
    {
        icon: scheduleIcon,
        item: 'Schedule',
        route: 'schedule'
    },
    {
        icon: usersIcon,
        item: 'Users',
        route: 'users'
    },
    {
        icon: settingsIcon,
        item: 'Settings',
        route: 'settings'
    }

]