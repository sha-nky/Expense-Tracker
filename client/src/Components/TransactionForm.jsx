import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createTransaction } from '../services/API';
import ToastMsg from "../Constants/ToastMsg";

function TransactionForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const handleTransactionSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await createTransaction(formData);
      if (response.status === 201) {
        ToastMsg("Transaction added successfully", "success");
        reset();
      } else {
        ToastMsg("Failed to add transaction", "error");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      ToastMsg("Server error! Please try again later", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleTransactionSubmit)} className="transaction-form space-y-4 p-4 border rounded">
      {/* Transaction To Field */}
      <div className="form-group">
        <label htmlFor="transaction_to" className="block text-sm font-medium text-gray-700">Transaction To</label>
        <input
          type="text"
          id="transaction_to"
          name="transaction_to"
          ref={register({ required: "Transaction recipient is required" })}
          className="mt-1 p-2 border rounded w-full"
          placeholder="Enter recipient"
        />
        {errors.transaction_to && <p className="text-red-500 text-xs mt-1">{errors.transaction_to.message}</p>}
      </div>

      {/* Type Field */}
      <div className="form-group">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
        <select
          id="type"
          name="type"
          ref={register({ required: "Type is required" })}
          className="mt-1 p-2 border rounded w-full"
        >
          <option value="">Select type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>

      {/* Amount Field */}
      <div className="form-group">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          ref={register({ required: "Amount is required", min: 1 })}
          className="mt-1 p-2 border rounded w-full"
          placeholder="Enter amount"
        />
        {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
      </div>

      {/* Category Field */}
      <div className="form-group">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="category"
          name="category"
          ref={register({ required: "Category is required" })}
          className="mt-1 p-2 border rounded w-full"
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="education">Education</option>
          <option value="personal">Personal</option>
          <option value="others">Others</option>
        </select>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
      </div>

      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          ref={register({ required: "Date is required" })}
          className="mt-1 p-2 border rounded w-full"
        />
        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {loading ? "Adding..." : "Add Transaction"}
      </button>
    </form>
  );
}

export default TransactionForm;