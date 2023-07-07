import React from 'react'
import CurrencyCard from './CurrencyCard'

function Navbar() {
  return (
    <div className='flex border-2 h-20 bg-gray-100'>
        <h1 className='text-3xl font-bold pt-3 pl-6 w-96'>Paranumus</h1>
        <div className='pt-2 flex-1'><CurrencyCard/></div>
    </div>
  )
}

export default Navbar
