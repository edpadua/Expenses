import React from 'react'

import { ExpenseContext } from "../../Contexts/ExpenseContext"

import type { ExpenseContextType } from "../../@types/expense.d.ts";

function Balance() {
    const { incomeTotal , expenseTotal } = React.useContext(ExpenseContext) as ExpenseContextType;

    const balance=incomeTotal-expenseTotal;

    return (
        <div className="pb-10">
            
            <div className="border border-slate-300 rounded-md px-10 py-10">
                <h3 className={balance>=0?"font-bold text-4xl text-indigo-600":"font-bold text-4xl text-red-500"}>Balanço: R$ {balance.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default Balance
