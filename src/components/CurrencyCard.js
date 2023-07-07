import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useSelector } from 'react-redux';

function TrendingSelector({trending}) {
  // trending: 'up', 'down', 'none'
    if (trending === 'up') {
        return <TrendingUpIcon className='text-green-500'/>
    } else if (trending === 'down') {
        return <TrendingDownIcon className='text-red-500'/>
    } else {
        return <TrendingUpIcon className='text-gray-500'/>
    }
}



function CurrencyCard() {
  const data = useSelector((state) => state.app.exchangeRates);

  console.log(data);

  return (
    <div className='flex flex-row gap-4 border-2 justify-center items-center'>
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
        }) : null}
    </div>

  )
}

export default CurrencyCard
