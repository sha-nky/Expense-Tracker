// IncomeSummary.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeSummary = () => {
  const data = {
    labels: ['Salary', 'Passive Income'],
    datasets: [
      {
        data: [5000, 1000],
        backgroundColor: ['#4BC0C0', '#505050'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '50%',
  };

  return (
    <div className="w-80 p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Income Summary</h3>
      <div className='flex items-center relative'>
        <Doughnut data={data} options={options} />
        <h2 className="text-center text-teal-400 font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">₹6000</h2>
      </div>
      <div className="mt-5 space-y-2">
        <p><span className="text-teal-400">●</span> Salary - ₹5000</p>
        <p><span className="text-gray-700">●</span> Passive Income - ₹1000</p>
      </div>
    </div>
  );
};

export default IncomeSummary;
