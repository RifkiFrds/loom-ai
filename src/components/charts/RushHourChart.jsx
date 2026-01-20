import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
            text: 'Rush Hour Analysis (Jam Sibuk)',
        },
    },
};

export function RushHourChart({ data }) {
    // Default mock data
    const chartData = data || {
        labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        datasets: [
            {
                label: 'Traffic / Orders',
                data: [12, 19, 3, 5, 20, 30, 45],
                backgroundColor: '#B9B8BC',
                hoverbackgroundColor: '#0C0C0C',
            },
        ],
    };

    return <Bar options={options} data={chartData} />;
}
