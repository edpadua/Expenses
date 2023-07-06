import { useState } from 'react'

import './App.css'

import Navbar from './Components/Navbar'
import ExpenseProvider from './Contexts/ExpenseContext'
import Balance from './Components/Balance'
import InputSection from './Components/InputSection'
import ListSection from './Components/ListSection'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <div className="w-full px-16 py-10">
        <ExpenseProvider>
          <InputSection />
          <div className="pt-10">
            <ListSection />
          </div>
          <div className="pt-10">
            <Balance />
          </div>
        </ExpenseProvider>
      </div>
      <Footer/>

    </>
  )
}

export default App
