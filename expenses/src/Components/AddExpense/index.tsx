import React from 'react'

import { useState, useContext } from 'react'

import {ExpenseContext} from "../../Contexts/ExpenseContext"

import type { ExpenseContextType, IExpense } from "../../@types/expense.d.ts";

import InputField from '../InputField/index.tsx';

function AddExpense() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const{saveExpense}=useContext(ExpenseContext) as ExpenseContextType;

  type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
  }




  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("nome", name);
    console.log("valor", amount);

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      name,
      value: +amount
    }
      
    saveExpense(newExpense);
    setName("");
    setAmount(0);
  };




  return (
    <div className='pb-4'>
      <div className="text-3xl font-bold pb-4">
          <h2>Despesa</h2>
      </div>
      <form onSubmit={onSubmit} className='flex items-center space-x-6'>

        <label className="font-bold" htmlFor="name">Nome</label>
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          className="w-1/4 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Digite o nome da despesa ..."
        />
    
        <label className="font-bold" htmlFor="amount">Valor</label>
        <input
          value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-1/4 placeholder:text-slate-400 block bg-white border border-slate-300 h-9 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="number" placeholder="Digite o valor da despesa ..."
        />

        <button className="hover:bg-blue-800 bg-indigo-600 px-4 py-2 font-semibold h-9 text-white rounded-md shadow-sm sm:text-sm">Adicionar</button>
      </form>
    </div>
  )
}

export default AddExpense
