import useChart from "../../../utils/helpers/hooks/useChart"

export declare type BarChartType = {
    name: string
    data: number[]
}

export interface BarChartProps {
    chartDetails: {
        data: BarChartType[]
        xAxis: string[]
    }
    horizontal?: boolean
}

export const useBarChart = ({ chartDetails, horizontal }: BarChartProps) => {

    // const chartLabels = chartDetails.data.map((item) => item.label) // map label
    const chartSeries = chartDetails.data.map((item) => item) // map values

    // Bar chart configuration
    const chartOptions = useChart({
        plotOptions: {
            bar: { horizontal, columnWidth: '50%', borderRadius: 5 }
        },
        grid: {
            xaxis: {
                lines: {
                    show: horizontal
                }
            },
            yaxis: {
                lines: {
                    show: !horizontal
                }
            }
        },
        xaxis: {
            categories: chartDetails.xAxis
        },

        title: {
            text: "Activities",
            lineHeight: '22px',
            align: 'left',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: '700',
                color: '#263238'
            },
        },

        subtitle: {
            text: 'May - Jun 2023',
            align: 'left',
            offsetX: 1,
            offsetY: 25,
            style: {
                fontSize: 14,
                fontWeight: 'normal',
                color: '#9699a2'
            }
        },
        chart: {
            toolbar: {
                show: false
            }
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: 'square',
            colors: ['transparent']
        },
        
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            offsetX: 0,
            offsetY: -40,
            labels: {
                colors: undefined,
                useSeriesColors: false
            }
        }

    })

    return { chartOptions, chartSeries }
}