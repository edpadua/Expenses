import * as React from 'react';

import { ExpenseContextType, IExpense, IIncome } from '../@types/expense';

export const ExpenseContext = React.createContext<ExpenseContextType | null>(null);


interface Props {
  children: React.ReactNode;
}

const ExpenseProvider: React.FC<Props> = ({ children }) => {
    const [expenses, setExpenses] = React.useState<IExpense[]>([]);
    const [incomes, setIncomes] = React.useState<IIncome[]>([]);
    const[expenseTotal,setExpensesTotal]=React.useState(0);
    const[incomeTotal,setIncomesTotal]=React.useState(0);
    const[balance,setBalance]=React.useState(0);
  
    const saveExpense = (expense: IExpense) => {
      const newExpense: IExpense = {
        id: Math.random(), 
        name: expense.name,
        value: expense.value,
      
      };
      setExpenses([...expenses, newExpense]);
      setExpensesTotal(expenseTotal+expense.value);
     
    };
  
    const updateExpense = (id: number) => {
      expenses.filter((expense: IExpense) => {
        if (expense.id === id) {
         
          setExpenses([...expenses]);
        }
      });
    };


    const updateBalance = () => {
        const newBalance=incomeTotal-expenseTotal;
        setBalance(newBalance);
        
    };


    const saveIncome = (income: IIncome) => {
      const newIncome: IIncome = {
        id: Math.random(), // not really unique - but fine for this example
        name: income.name,
        value: income.value,
      
      };
      setIncomes([...incomes, newIncome]);
      setIncomesTotal(incomeTotal+income.value);
   
    };
  
    const updateIncome = (id: number) => {
      incomes.filter((income: IIncome) => {
        if (income.id === id) {
         
          setIncomes([...incomes]);
        }
      });
    };
  
    return <ExpenseContext.Provider value={{ expenses,  saveExpense, updateExpense, incomes, saveIncome, updateIncome, incomeTotal, expenseTotal, balance }}>{children}</ExpenseContext.Provider>;
  };
  
  export default ExpenseProvider;