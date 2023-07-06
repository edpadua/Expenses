import * as React from 'react';

import { IExpense } from '../../@types/expense';

type Props = {
    expense: IExpense;

};

function Expense({ expense }: Props) {
    return (
        <div className="flex">
            <div className="font-bold pr-2">
                <h2>{expense.name}</h2>
            </div>
            <div>
                <p>R$ {expense.value}</p>
            </div>

        </div>
    )
}

export default Expense
