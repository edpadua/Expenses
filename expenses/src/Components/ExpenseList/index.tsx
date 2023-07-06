import React from 'react'

import { ExpenseContext } from "../../Contexts/ExpenseContext"

import type { ExpenseContextType, IExpense } from "../../@types/expense.d.ts";

import Expense from '../Expense/index.tsx';

function ExpenseList() {
    const { expenses, expenseTotal } = React.useContext(ExpenseContext) as ExpenseContextType;
    return (
        <div className="pb-10">
            <div className="font-bold text-2xl pb-4">
                <h2>Lista de Despesas:</h2>
            </div>

            {expenses.map((expense: IExpense) => (
                <Expense key={expense.id} expense={expense} />
            ))}

<div>
                <h3 className="font-bold text-3xl pt-4" >Despesa Total: R$ {expenseTotal.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default ExpenseList
