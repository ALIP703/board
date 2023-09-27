import React from 'react'
import Card from '../../card/Card'
import "./BarChart.scss"
import Chart from "react-apexcharts"
import { BarChartProps, useBarChart } from './Helper'

const BarChart: React.FC<BarChartProps> = ({chartDetails}) => {
  const { chartOptions, chartSeries } = useBarChart({ horizontal: false, chartDetails })
  return (
    <Card className='bar-chart'>
      <Chart type='bar' options={chartOptions} series={chartSeries} height={300} width={840}/>
    </Card>
  )
}

export default BarChart