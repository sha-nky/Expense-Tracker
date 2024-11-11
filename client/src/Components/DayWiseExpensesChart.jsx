import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DayWiseExpensesChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Expenses',
        data: [2, 3, 1, 5, 0, 0, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-80 p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Day wise expenses</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DayWiseExpensesChart;
