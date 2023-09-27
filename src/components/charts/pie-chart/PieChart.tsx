import React from 'react'
import "./PieChart.scss"
import { PieChartProps, usePieChart } from './Helper';
import Card from '../../card/Card';
import Chart from 'react-apexcharts'

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const { chartOption, series } = usePieChart({ data })

    return (
        <Card className='donut-chart'>
            <Chart options={chartOption} series={series} type='donut' width='375px' />
        </Card>
    )
};

export default PieChart