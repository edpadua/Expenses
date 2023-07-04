export interface IExpense {
    id: number;
    name: string;
    value: number;
  }


  export interface IIncome{
    id: number;
    name: string;
    value: number;
  }
  
  export type ExpenseContextType = {
    expenses: IExpense[];
    incomes: IIncome[];
    saveExpense: (expense: IExpense) => void;
    updateExpense: (id: number) => void;
    saveIncome: (income: IIncome) => void;
    updateIncome: (id: number) => void;
  };