import React from 'react'
import StaticsCard from '../../components/card/statics-card/StaticsCard'
import { CardDetailsProps } from '../../components/card/statics-card/Helper'
import RevenueIcon from "../../assets/dashboard-icons/revenue.svg"
import LikesIcon from "../../assets/dashboard-icons/likes.svg"
import UsersIcon from "../../assets/dashboard-icons/users.svg"
import TransactionsIcon from "../../assets/sidebar-icons/transaction.svg"
import { COLORS } from '../../utils/helpers/constants/Colors'
import './PageDashboard.scss'
import PieChart from '../../components/charts/pie-chart/PieChart'
import BarChart from '../../components/charts/bar-chart/BarChart'
import { BarChartProps } from '../../components/charts/bar-chart/Helper'
import Card from '../../components/card/Card'
import IconButton from '../../components/buttons/icon-button/IconButton'
import AddIcon from "../../assets/dashboard-icons/plus.svg"

const PageDashboard: React.FC = () => {
    const getTotalRevenue = async () => {
        const data: CardDetailsProps = {
            title: 'Total Revenue',
            total: '23233',
            currentStatus: {
                percentage: 2.2,
                growthStatus: true
            }
        }
        return data
    }
    const getTotalLikes = async () => {
        const data: CardDetailsProps = {
            title: 'Total Transactions',
            total: '2,3233',
            currentStatus: {
                percentage: 2.2,
                growthStatus: true
            }
        }
        return data
    }
    const getTotalTransactions = async () => {
        const data: CardDetailsProps = {
            title: 'Total Likes',
            total: '2,3233',
            currentStatus: {
                percentage: 2.2,
                growthStatus: false
            }
        }
        return data
    }
    const getTotalUsers = async () => {
        const data: CardDetailsProps = {
            title: 'Total Users',
            total: '2,333',
            currentStatus: {
                percentage: 2.2,
                growthStatus: true
            }
        }
        return data
    }
    // const data = [
    //     { label: 'Week 1', values: [500, 320], color: 'blue' },
    //     { label: 'Week 2', values: [400, 200], color: 'green' },
    //     { label: 'Week 3', values: [320, 300], color: 'red' },
    //     { label: 'Week 4', values: [230, 300], color: 'red' },
    //     { label: 'Week 5', values: [150, 300], color: 'red' },
    // ];
    // [' <br>&nbsp;&nbsp;&nbsp; 50%', ' <br>&nbsp;&nbsp;&nbsp; 50%', ' <br>&nbsp;&nbsp;&nbsp; 50%'],

    const data = [
        { label: 'Basic Tees', value: 700 },
        { label: 'Custom short pants', value: 1000 },
        { label: 'Super hoodies', value: 600 },
    ];

    const barChartData: BarChartProps = {
        chartDetails: {
            data: [
                { name: 'Guest', data: [300, 100, 200, 300] },
                { name: 'User', data: [500, 300, 500, 300] }
            ],
            xAxis: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        }
    }

    return (
        <div className='dashboard'>
            <div className='card-section'>
                <StaticsCard
                    icon={RevenueIcon}
                    color={COLORS.lightGreen}
                    apiDetails={{
                        api: getTotalRevenue,
                        key: 'data'
                    }} />
                <StaticsCard
                    icon={TransactionsIcon}
                    color={COLORS.lightBrown}
                    apiDetails={{
                        api: getTotalTransactions,
                        key: 'data'
                    }} />
                <StaticsCard
                    icon={LikesIcon}
                    color={COLORS.lightPink}
                    apiDetails={{
                        api: getTotalLikes,
                        key: 'data'
                    }} />
                <StaticsCard
                    color={COLORS.lightViolate}
                    icon={UsersIcon}
                    apiDetails={{
                        api: getTotalUsers,
                        key: 'data'
                    }} />
            </div>
            <div className="bar-chart-section">
                <BarChart chartDetails={barChartData.chartDetails} />
            </div>
            <div className="pie-chart-section">
                <PieChart data={data} />
            </div>
            <div className="add-profile-section">
                <Card className='add-profile-card'>
                    <IconButton
                        handleClick={() => { }}
                        title='add-profile'
                        icon={AddIcon}
                        style={{
                            backgroundColor: COLORS.lightGrey,
                            padding: '1rem',
                            width: '40px',
                            height: '40px',
                            borderRadius: "50%",
                        }} />
                        <span>Add Profile</span>
                </Card>
            </div>
        </div>
    )
}

export default PageDashboard