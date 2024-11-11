// Dashboard.js
import React from 'react';

// Sample transaction data for demonstration
const transactions = [
  { id: 1, from: 'Alice', to: 'Bob', amount: 100, date: '2024-11-01' },
  { id: 2, from: 'Charlie', to: 'Dave', amount: 200, date: '2024-11-02' },
  { id: 3, from: 'Eve', to: 'Frank', amount: 300, date: '2024-11-03' },
];

const Transactions = () => {
  return (
    <div className="p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-center">Transaction Statement</h3>
      
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">From</th>
            <th className="border px-4 py-2 text-left">To</th>
            <th className="border px-4 py-2 text-left">Amount (₹)</th>
            <th className="border px-4 py-2 text-left">Date of Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.from}</td>
              <td className="border px-4 py-2">{transaction.to}</td>
              <td className="border px-4 py-2">₹{transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
