import React, { useState } from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { TextField } from '@mui/material';
import { CommonButton, CurrencyWithFlag } from './generalComponents';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const currencyHeader = [
    {
        title: 'Convert',
        icon: <CurrencyExchangeIcon className='text-blue-500' fontSize='small'/>,
        selected: true
    },
    {
        title: 'Send',
        icon: <CurrencyExchangeIcon className='text-blue-500' fontSize='small'/>
    },
    {
        title: 'Charts',
        icon: <CurrencyExchangeIcon className='text-blue-500' fontSize='small'/>
    },
    {
        title: 'Alerts',
        icon: <CurrencyExchangeIcon className='text-blue-500' fontSize='small'/>
    },
]

function CurrencyCalculatorCard() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const exchangeRates = useSelector((state) => state.app.exchangeRates);

    console.log(exchangeRates);

    function changeRates() {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    const currencyCalculator = useCallback(() => {
        const fromCurrencyRate = exchangeRates.find((item) => item.NameEn === fromCurrency);
        const toCurrencyRate = exchangeRates.find((item) => item.NameEn === toCurrency);
      
        return (amount * toCurrencyRate.MidRate) / fromCurrencyRate.MidRate;
      }, [amount, exchangeRates, fromCurrency, toCurrency]);

  return (
    <div className='flex flex-col border-2 mt-14 mx-40 gap-6 rounded-2xl overflow-hidden'> 
        <div className='flex flex-row h-16 '>
            {currencyHeader.map((item) => {
                return (
                    <div className={`flex flex-row items-center justify-center gap-2 w-1/4 ${item.selected ? "" : 'bg-slate-50'}`}>
                        {item.icon}
                        <h1 className={`${item.selected ? "text-blue-500" : "text-gray-500"} font-bold`}>{item.title}</h1>
                    </div>
                )
            })}
        </div>
        <div className='flex flex-row w-full gap-4 pt-5 px-36'>
            <TextField
                id="demo-helper-text-aligned"
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='w-full'
                helperText="Please enter the amount you want to convert"
            />
            <CurrencyWithFlag currency={fromCurrency} setCurrency={setFromCurrency}/>
            <SyncAltIcon className='text-blue-500 mt-2' fontSize='large' onClick={changeRates}/>
            <CurrencyWithFlag currency={toCurrency} setCurrency={setToCurrency}/>
        </div>
        <div className='flex flex-col px-36 gap-2 w-full text-2xl pb-20'>
            <h1 className='font-bold'>{amount} {fromCurrency} = </h1>
            <h1 className='font-bold'>{currencyCalculator()} {toCurrency}</h1>
        </div>
    </div>
  )
}

export default CurrencyCalculatorCard
