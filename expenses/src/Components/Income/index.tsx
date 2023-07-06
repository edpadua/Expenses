import * as React from 'react';

import { IIncome } from '../../@types/expense';

type Props = {
    income: IIncome;

};

function Income({ income }: Props) {
    return (
        <div className="flex">
            <div className="font-bold pr-2">
                <h2>{income.name}</h2>
            </div>
            <div>
                <p>R$ {income.value.toFixed(2)}</p>
            </div>
           
        </div>

    )
}

export default Income
