import React from 'react'

import ExpenseList from '../ExpenseList'
import IncomeList from '../IncomeList'

function ListSection() {
    return (
        <div className="border border-slate-300 rounded-md px-10 py-10">
            <ExpenseList />
            <IncomeList />
        </div>
    )
}

export default ListSection
