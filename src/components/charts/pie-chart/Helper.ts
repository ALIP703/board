import useChart from "../../../utils/helpers/hooks/useChart"

export declare type PieChartType = {
    label: string
    value: number
}

export interface PieChartProps {
    data: PieChartType[]
}

export const usePieChart = ({ data }: PieChartProps) => {

    const total = data.reduce((acc, item) => acc + item.value, 0);
    const percentages = data.map(item => ((item.value / total) * 100).toFixed(1));
    const series = data.map((item) => item.value)
    const chartLabels = data.map((item) => item.label);

    const legendsWithPercentage = data.map((item, index) => {
        return `${item.label} <br>&nbsp;&nbsp;&nbsp;<span style="color: #858585; font-size: 11px; font-weight: 200"> ${percentages[index]}%</span>`
    },
    );

    const chartOption = useChart({
        labels: chartLabels,

        // title
        title: {
            text: 'Top Products',
            lineHeight: '22px',
            align: 'left',
            margin: 10,
            style: {
                fontSize: '18px',
                fontWeight: '700',
                color: '#263238'
            },
        },
        
        // subtitle
        subtitle: {
            text: 'May Jun 2023',
            align: 'right',
            margin: 15,
            offsetX: 10,
            offsetY: 0,
            style: {
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#9699a2'
            },
        },

        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            width: 0,
        },

        legend: {
            show: true,
            showForSingleSeries: true,
            showForNullSeries: true,
            showForZeroSeries: true,
            fontSize: '12px',
            fontWeight: 700,

            customLegendItems: legendsWithPercentage,
            offsetY: 15,
            markers: {
                width: 12,
                height: 12,
                offsetX: -10,
            }
        },
        noData: {
            text: 'Loading...'
        },

        dataLabels: { enabled: false, dropShadow: { enabled: true } }
    })

    return {
        chartOption,
        series
    }
}