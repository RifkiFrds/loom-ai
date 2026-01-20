import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Product Ranking Trend',
        },
    },
};

export function RankChart({ data }) {
    // Default mock data if none provided (for development/testing)
    const chartData = data || {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Product Rank Score',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#0C0C0C',
                backgroundColor: 'rgba(12, 12, 12, 0.1)',
                tension: 0.1,
                borderWidth: 1.5,
                pointRadius: 2,
            },
        ],
    };

    return <Line options={options} data={chartData} />;
}
