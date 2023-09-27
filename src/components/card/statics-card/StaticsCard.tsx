import React from 'react'
import { StaticCardProps, useStaticCardHook } from './Helper'
import './StaticsCard.scss'
import Card from '../Card'

const StaticsCard: React.FC<StaticCardProps> = ({ color, icon, apiDetails }) => {
    const { cardDetails } = useStaticCardHook(apiDetails)

    return (
        <Card className='card'>
            <img
                src={icon}
                alt={cardDetails?.title}
                className="card-icon"
                style={{ backgroundColor: color }} />
            <span className="card-title">{cardDetails?.title}</span>
            <span className="card-value">{cardDetails?.total}</span>
            <span className={`card-chip ${cardDetails?.currentStatus?.growthStatus ? 'positive' : 'negative'}`}>

                {cardDetails?.currentStatus?.growthStatus ? '+' : '-'}
                {cardDetails?.currentStatus.percentage}
            </span>
        </Card>
    )
}

export default StaticsCard