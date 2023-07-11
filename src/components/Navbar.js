import React from 'react'
import CurrencyCard from './CurrencyCard'

function Navbar() {
  return (
    <div className='flex flex-row border-2 h-24 bg-gray-100'>
        <h1 className='text-3xl font-bold p-2 w-[40rem]'>Paranumus</h1>
        <CurrencyCard/>
    </div>
  )
}

export default Navbar
