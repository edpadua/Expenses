import * as React from 'react';

import { ExpenseContextType, IExpense, IIncome } from '../@types/expense';

export const ExpenseContext = React.createContext<ExpenseContextType | null>(null);


const ExpenseProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [expenses, setExpenses] = React.useState<IExpense[]>([]);
    const [incomes, setIncomes] = React.useState<IIncome[]>([]);
  
    const saveExpense = (expense: IExpense) => {
      const newExpense: IExpense = {
        id: Math.random(), // not really unique - but fine for this example
        name: expense.name,
        value: expense.value,
      
      };
      setExpenses([...expenses, newExpense]);
    };
  
    const updateExpense = (id: number) => {
      expenses.filter((expense: IExpense) => {
        if (expense.id === id) {
         
          setExpenses([...expenses]);
        }
      });
    };


    const saveIncome = (income: IIncome) => {
      const newIncome: IIncome = {
        id: Math.random(), // not really unique - but fine for this example
        name: income.name,
        value: income.value,
      
      };
      setIncomes([...incomes, newIncome]);
    };
  
    const updateIncome = (id: number) => {
      incomes.filter((income: IIncome) => {
        if (income.id === id) {
         
          setIncomes([...incomes]);
        }
      });
    };
  
    return <ExpenseContext.Provider value={{ expenses, saveExpense, updateExpense, incomes, saveIncome, updateIncome }}>{children}</ExpenseContext.Provider>;
  };
  
  export default ExpenseProvider;