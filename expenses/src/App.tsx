import { useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar'
import AddExpense from './Components/AddExpense'
import AddIncome from './Components/AddIncome'

function App() {


  return (
    <>
      <Navbar />
      <div className="w-full px-16 py-10">
        <AddExpense />
        <AddIncome />
      </div>

    </>
  )
}

export default App
