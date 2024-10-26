import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesBreakdown = () => {
  const data = {
    labels: ['Food', 'Shopping', 'Subscription'],
    datasets: [
      {
        data: [32, 120, 80],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="w-full p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Expenses Breakdown</h3>
      <Doughnut data={data} options={options} />
      <div className="mt-5 space-y-2">
        <p><span className="text-red-500">●</span> Food - ₹32</p>
        <p><span className="text-yellow-500">●</span> Shopping - ₹120</p>
        <p><span className="text-blue-500">●</span> Subscription - ₹80</p>
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
