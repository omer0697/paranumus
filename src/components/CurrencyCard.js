import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function CurrencyCard() {
  const data = useSelector((state) => state.app.exchangeRates);

  return (
    <div className='flex flex-row gap-4 justify-center items-center w-96'>
        {data ? data.map((item,index) => {
            return (
              <div className='flex row items-center gap-2'>
                {index % 2 === 0 ? <TrendingUpIcon className='text-green-500 ' fontSize='large'/> : <TrendingDownIcon className='text-red-500' fontSize='large'/>}
                <div className='flex flex-col'>
                  <h1 className='text-xl font-bold'>{item.NameEn}</h1>
                  <h1 className='text-xl'>{String(item.MidRate).slice(0,5)}</h1>
                </div>
              </div>
            )
        }) : <Loading loading={true}/>}
    </div>
  )
}

export default CurrencyCard
