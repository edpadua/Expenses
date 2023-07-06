import React from 'react'

import AddExpense from '../AddExpense/index'
import AddIncome from '../AddIncome/index'

function InputSection() {
  return (
    <div className="border border-slate-300 rounded-md px-10 py-10">
        <AddExpense />
        <AddIncome />
    </div>
  )
}

export default InputSection
