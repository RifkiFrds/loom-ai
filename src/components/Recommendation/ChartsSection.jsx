import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ChartsSection = ({ data }) => {
  if (!data) return null;

  const { peakHours, partOfDay, topProducts, bottomProducts } = data;

  // 1. Peak Shopping Hours (Line Chart)
  const peakHoursData = {
    labels: peakHours.map(i => i.hour),
    datasets: [{
      label: 'Transactions',
      data: peakHours.map(i => i.count),
      fill: true,
      borderColor: '#C7A07A',
      backgroundColor: 'rgba(199,160,122,0.1)',
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
    }],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 17, 26, 0.9)',
        titleColor: '#C7A07A',
        bodyColor: '#E2E8F0',
        borderColor: 'rgba(199,160,122,0.2)',
        borderWidth: 1,
        padding: 10,
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: 'rgba(255,255,255,0.5)' }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: 'rgba(255,255,255,0.5)' }
      }
    }
  };

  // 2. Shopping by Part of Day (Doughnut Chart)
  const partOfDayLabels = Object.keys(partOfDay);
  const partOfDayData = {
    labels: partOfDayLabels,
    datasets: [{
      data: partOfDayLabels.map(k => partOfDay[k]),
      backgroundColor: [
        'rgba(199,160,122,0.8)', // Morning
        'rgba(111,74,72,0.8)',   // Afternoon
        'rgba(255,143,145,0.8)', // Evening
      ],
      borderColor: 'rgba(17, 17, 26, 0.8)',
      borderWidth: 2,
    }],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: { color: 'rgba(255,255,255,0.7)', font: { family: 'sans-serif' } }
      }
    }
  };

  // 3. Top Products (Horizontal Bar)
  const topProductsData = {
    labels: topProducts.map(p => p.name),
    datasets: [{
      label: 'Sales',
      data: topProducts.map(p => p.value),
      backgroundColor: 'rgba(199,160,122,0.8)',
      borderRadius: 4,
    }]
  };

  const horizontalBarOptions = (title) => ({
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: { display: true, text: title, color: '#C7A07A', font: { size: 16, family: 'serif' } },
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(17, 17, 26, 0.9)',
        itemSort: (a, b) => b.raw - a.raw // Sort tooltip if needed, but data is usually sorted
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: 'rgba(255,255,255,0.5)' }
      },
      y: {
        grid: { display: false },
        ticks: { color: 'rgba(255,255,255,0.8)' }
      }
    }
  });

  // 4. Bottom Products (Horizontal Bar - Warning Color)
  const bottomProductsData = {
    labels: bottomProducts.map(p => p.name),
    datasets: [{
      label: 'Sales',
      data: bottomProducts.map(p => p.value),
      backgroundColor: 'rgba(239, 68, 68, 0.7)', // Red-500 equivalent
      borderRadius: 4,
    }]
  };

  return (
    <section className="space-y-12">
      {/* Row 1: Line and Doughnut */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-loom-light/[0.02] border border-loom-light/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="font-serif text-lg text-loom-light mb-4">Peak Shopping Hours</h3>
          <div className="h-[300px]">
            <Line data={peakHoursData} options={lineOptions} />
          </div>
        </div>
        <div className="bg-loom-light/[0.02] border border-loom-light/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="font-serif text-lg text-loom-light mb-4">Shopping by Time of Day</h3>
          <div className="h-[300px] flex items-center justify-center">
            <Doughnut data={partOfDayData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Row 2: Top and Bottom Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-loom-light/[0.02] border border-loom-light/10 p-6 rounded-lg backdrop-blur-sm">
          <div className="h-[300px]">
            <Bar data={topProductsData} options={horizontalBarOptions('Top 5 Products')} />
          </div>
        </div>
        <div className="bg-loom-light/[0.02] border border-loom-light/10 p-6 rounded-lg backdrop-blur-sm">
          <div className="h-[300px]">
            <Bar data={bottomProductsData} options={horizontalBarOptions('Products needing Attention')} />
          </div>
        </div>
      </div>
    </section>
  );
};
