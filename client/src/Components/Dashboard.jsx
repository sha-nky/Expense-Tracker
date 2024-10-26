// Dashboard.js
import React from 'react';
import DayWiseExpensesChart from './DayWiseExpensesChart';
import ExpensesBreakdown from './ExpensesBreakdown';
import IncomeSummary from './IncomeSummary';

const Dashboard = () => {
  return (
    <div className="flex justify-evenly gap-5 p-5 bg-teal-400 w-full">
      <div className="flex flex-col gap-5">
        <div className='flex gap-10'>
          <div className="p-5 bg-teal-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Total Transactions</h3>
            <h1 className="text-2xl font-bold">28</h1>
          </div>

          <div className="p-5 bg-teal-100 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Total Expenses</h3>
            <h1 className="text-2xl font-bold">₹10000</h1>
          </div>
        </div>
        
        <div>
          <ExpensesBreakdown />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <DayWiseExpensesChart />
        <IncomeSummary />
      </div>
    </div>
  );
};

export default Dashboard;
