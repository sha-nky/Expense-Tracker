// Budget.js
import React from 'react';

// Sample user data for demonstration
const user = {
  name: 'Alice',
  budget: 1000, // Set user's budget
  transactions: [
    { id: 1, from: 'Alice', to: 'Bob', amount: 100, date: '2024-11-01' },
    { id: 2, from: 'Alice', to: 'Charlie', amount: 200, date: '2024-11-02' },
    { id: 3, from: 'Alice', to: 'Frank', amount: 300, date: '2024-11-03' },
  ],
};

// Calculate total expenses for the user
const totalExpenses = user.transactions.reduce((total, transaction) => total + transaction.amount, 0);
const remainingBalance = user.budget - totalExpenses;

const Budget = () => {
  return (
    <div className="p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-center">Budget Overview for {user.name}</h3>
      <div className="mb-5 text-center">
        <p className="text-lg">Budget: ₹{user.budget}</p>
        <p className="text-lg">Total Expenses: ₹{totalExpenses}</p>
        <p className="text-lg font-bold">Remaining Balance: ₹{remainingBalance}</p>
      </div>
    </div>
  );
};

export default Budget;
