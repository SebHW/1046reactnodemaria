import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return <div>
        <Line
            data={{
                labels: ['Red', 'Blue'],
                datasets: [{
                    label: 'Number of votes',
                    data: [12, 19],
                    backgroundColor: [
                        'red',
                        'blue'
                    ],
                    hoverBorderColor: [
                        'pink',
                        'pink'
                    ],
                    borderWidth: 10
                },
                {
                    label: 'Quantity',
                    data: [100, 104],
                    backgroundColor: 'orange',
                    borderColor:'red',
                }
                ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
    </div>
}

export default LineChart