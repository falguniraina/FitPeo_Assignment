import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import Goals from './Goals';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);

const Activity = () => {
    const chartData = {
        labels: ['5', '7', '9', '11', '13', '15'],
        datasets: [
            {
                data: [10000, 6000, 8000, 12000, 7000, 9000],
                backgroundColor: '#4FB6EC',
                borderColor: '#4FB6EC',
                borderWidth: 1,
                barThickness: 10,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                font: {
                    weight: 'bold',
                    size: 16,
                    color: '#fff'
                },
                padding: {
                    bottom: 10
                }
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.raw}`;
                    }
                },
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: false
                },
                ticks: {
                    autoSkip: true,
                    color: '#fff',
                    maxRotation: 0,
                }
            },
            y: {
                title: {
                    display: false
                },
                ticks: {
                    color: '#fff',
                    callback: function (value) {
                        if (value === 0) return '0';
                        if (value === 5000) return '5K';
                        if (value === 10000) return '10K';
                        if (value === 15000) return '15K';
                        return '';
                    },
                    stepSize: 5000,
                    padding: 10
                }
            }
        }
    };

    const [timeframe, setTimeframe] = useState('weekly');

    const handleChange = (event) => {
        setTimeframe(event.target.value);
    };

    return (
        <div className='activity-goals'>
            <div className="activity-box">
                <div className="activity-header">
                    <h3>Activity</h3>
                    <select value={timeframe} onChange={handleChange}>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <div className="activity-chart">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
            <div className='goals'>
                <Goals />
            </div>
        </div>
    );
};

export default Activity;
