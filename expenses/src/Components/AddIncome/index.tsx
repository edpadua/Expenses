import React from 'react'

function AddIncome() {
  return (
    <div className='py-4'>
       <form className='flex items-center space-x-6'>
           <input className="w-1/4 placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Digite o nome da receita ..." />
           <input className="w-1/4 placeholder:text-slate-400 block bg-white border border-slate-300 h-9 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="number" placeholder="Digite o valor da receita ..."/>
           <button className="hover:bg-blue-800 bg-indigo-600 px-4 py-2 font-semibold h-9 text-white rounded-md shadow-sm sm:text-sm">Adicionar</button>
       </form>
    </div>
  )
}

export default AddIncome
