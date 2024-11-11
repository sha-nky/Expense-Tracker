import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./Helper";

export const loginFunction = async (number, password) => {
  return await commonrequest("POST", `${BACKEND_URL}/api/v1/users/login`, {
    number,
    password,
  });
};

export const signupFunction = async (
  name,
  password,
  email,
  number,
) => {
  return await commonrequest("POST", `${BACKEND_URL}/api/v1/users/signup`, {
    name,
    password,
    email,
    number,
  });
};

export const createTransaction = (transactionData) => 
  axios.post('/api/v1/transactions', transactionData);

export const getAllTransactions = (userId) => 
  axios.get(`/api/v1/transactions/${userId}`);

export const updateTransaction = (transactionId, updateData) => 
  axios.put(`/api/v1/transactions/${transactionId}`, updateData);

export const deleteTransaction = (transactionId) => 
  axios.delete(`/api/v1/transactions/${transactionId}`);

export const createBudget = (budgetData) => 
  axios.post('/api/v1/budgets', budgetData);

export const getUserBudgets = (userId) => 
  axios.get(`/api/v1/budgets/${userId}`);

export const updateBudget = (budgetId, updateData) => 
  axios.put(`/api/v1/budgets/${budgetId}`, updateData);

export const deleteBudget = (budgetId) => 
  axios.delete(`/api/v1/budgets/${budgetId}`);

export const createExpense = (expenseData) => 
  axios.post('/api/v1/expenses', expenseData);

export const getUserExpenses = (userId) => 
  axios.get(`/api/v1/expenses/${userId}`);

export const updateExpense = (expenseId, updateData) => 
  axios.put(`/api/v1/expenses/${expenseId}`, updateData);

export const deleteExpense = (expenseId) => 
  axios.delete(`/api/v1/expenses/${expenseId}`);
