import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const user = {
  name: 'Alice',
  budget: 1000,
  transactions: [
    { id: 1, from: name, to: 'Bob', amount: 100, date: '2024-11-01', category: 'Food' },
    { id: 2, from: name, to: 'Charlie', amount: 200, date: '2024-11-02', category: 'Travel' },
    { id: 3, from: name, to: 'Frank', amount: 300, date: '2024-11-03', category: 'Accommodation' },
    { id: 4, from: name, to: 'Utility', amount: 150, date: '2024-11-04', category: 'Electricity Bill' },
    { id: 5, from: name, to: 'Gas Station', amount: 80, date: '2024-11-05', category: 'Gas Bill' },
    { id: 6, from: name, to: 'Mall', amount: 120, date: '2024-11-06', category: 'Clothing' },
  ],
};

const categoryExpenses = user.transactions.reduce((acc, transaction) => {
  acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
  return acc;
}, {});

const data = {
  labels: Object.keys(categoryExpenses),
  datasets: [
    {
      label: 'Expenses by Category',
      data: Object.values(categoryExpenses),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
      ],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const Expense = () => {
  return (
    <div className="p-5 bg-teal-100 rounded-lg h-screen">
      <h3 className="text-lg font-semibold mb-3 text-center">Expenses by Category for {user.name}</h3>

      <div className="mt-5 flex justify-center">
        <Doughnut data={data} options={options} width={200} height={200} />
      </div>
    </div>
  );
};

export default Expense;
