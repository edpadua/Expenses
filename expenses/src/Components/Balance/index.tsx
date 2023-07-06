import React from 'react'

import { ExpenseContext } from "../../Contexts/ExpenseContext"

import type { ExpenseContextType } from "../../@types/expense.d.ts";

function Balance() {
    const { incomeTotal , expenseTotal } = React.useContext(ExpenseContext) as ExpenseContextType;
    return (
        <div className="pb-10">
            
            <div className="border border-slate-300 rounded-md px-10 py-10">
                <h3>Balanço: R$ {incomeTotal-expenseTotal}</h3>
            </div>
        </div>
    )
}

export default Balance
