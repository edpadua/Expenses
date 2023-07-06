import React from 'react'

import { ExpenseContext } from "../../Contexts/ExpenseContext"

import type { ExpenseContextType, IIncome } from "../../@types/expense.d.ts";

import Income from '../Income/index.tsx';

function IncomeList() {
    const { incomes, incomeTotal } = React.useContext(ExpenseContext) as ExpenseContextType;
    return (
        <div className="pb-10">
            <div className="font-bold text-2xl pb-4">
                <h2>Lista de Receitas:</h2>
            </div>

            {incomes.map((income: IIncome) => (
                <Income key={income.id} income={income} />
            ))}

            <div>
                <h3>Receita Total: R$ {incomeTotal}</h3>
            </div>
        </div>
    )
}

export default IncomeList
