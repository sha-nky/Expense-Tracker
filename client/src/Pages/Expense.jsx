// Expense.js
import React from 'react';

// Sample user data for demonstration
const user = {
  name: 'Alice',
  budget: 1000, // Set user's budget
  transactions: [
    { id: 1, from: 'Alice', to: 'Bob', amount: 100, date: '2024-11-01', category: 'Food' },
    { id: 2, from: 'Alice', to: 'Charlie', amount: 200, date: '2024-11-02', category: 'Travel' },
    { id: 3, from: 'Alice', to: 'Frank', amount: 300, date: '2024-11-03', category: 'Accommodation' },
    { id: 4, from: 'Alice', to: 'Utility', amount: 150, date: '2024-11-04', category: 'Electricity Bill' },
    { id: 5, from: 'Alice', to: 'Gas Station', amount: 80, date: '2024-11-05', category: 'Gas Bill' },
    { id: 6, from: 'Alice', to: 'Mall', amount: 120, date: '2024-11-06', category: 'Clothing' },
  ],
};

// Calculate expenses by category
const categoryExpenses = user.transactions.reduce((acc, transaction) => {
  acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
  return acc;
}, {});

const Expense = () => {
  return (
    <div className="p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-center">Expenses by Category for {user.name}</h3>
      <div className="mt-5">
        <h4 className="text-lg font-semibold">Expenses Segregated by Category:</h4>
        <ul className="list-disc list-inside">
          {Object.entries(categoryExpenses).map(([category, amount]) => (
            <li key={category}>
              {category}: ₹{amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expense;
