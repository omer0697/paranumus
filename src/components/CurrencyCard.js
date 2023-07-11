import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function CurrencyCard() {
  const data = useSelector((state) => state.app.exchangeRates);

  return (
    <div className='flex flex-row gap-4 justify-center items-center w-[500px] h-24'>
        {data ? data.map((item,index) => { 
            if (item.NameEn === 'TRY'){
              return null;
            }
            return (
              <div className='flex flex-row items-center gap-2 w-full'>
                {index % 2 === 0 ? <TrendingUpIcon className='text-green-500' fontSize='large'/> : <TrendingDownIcon className='text-red-500' fontSize='large'/>}
                <div className='flex flex-col h-full gap-1'>
                  <p className='text-lg font-bold '>{item.NameEn}</p>
                  <p className='text-lg'>{String(item.MidRate).slice(0,5)}</p>
                </div>
              </div>
            )
        }) : <Loading loading={true}/>}
    </div>
  )
}

export default CurrencyCard
