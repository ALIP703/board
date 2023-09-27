import { COLORS } from "../constants/Colors"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useChart(options: any) {

    const baseOptions = {
        // Colors
        colors: [
            COLORS.lightGreen,
            COLORS.lightRed,
            COLORS.lightYellow,
            COLORS.lightViolate
        ],

        // Fill
        fill: {
            opacity: 1,
            gradient: {
                type: 'vertical',
                shadeIntensity: 0,
                opacityFrom: 0.6,
                opacityTo: 0,
                stops: [0, 100]
            }
        },

        // DataLabels
        dataLabels: {
            enabled: false,
            enabledOnSeries: undefined,
        },

        // Stroke
        stroke: {
            width: 0,
            curve: 'smooth',
            lineCap: 'round'
        },

        // Grid
        grid: {
            strokeDashArray: 3,
            borderColor: 'gray',
            xaxis: {
                lines: {
                    show: false
                }
            }
        },

        // Xaxis
        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false }
        },

        // Markers
        markers: {
            size: 0,
            //   strokeColors: 
        },

        // Tooltip
        tooltip: {
            x: {
                show: false
            }
        },


        // plotOptions
        plotOptions: {
            // Bar
            bar: {
                borderRadius: 10,
                columnWidth: '18%',
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last'
            },

            // Area
            area: {
                fillTo: 'end'
            },

            // Pie + Donut
            pie: {
                startAngle: 0,
                endAngle: 360,
                expandOnClick: false,
                customScale: 1,
                offsetY: -20,
                offsetX: -20,
                donut: {
                    size: 78,
                    background: 'transparent',
                },
            },

        },

        // // Responsive
        responsive: [
            {
                // sm
                breakpoint: 40,
                options: {
                    plotOptions: { bar: { columnWidth: '40%' } }
                }
            },
            {
                // md
                breakpoint: 60,
                options: {
                    plotOptions: { bar: { columnWidth: '32%' } }
                }
            }
        ]
    }

    return { ...baseOptions, ...options }
}
