import React from 'react'
import data from "../provider/exchangesnapdata.json"
function index() {
  return (
    <div className='flex lg:w-[80%] flex-col mx-auto shadow-md rounded-sm py-3 gap-4 my-2'>
         <div className='flex flex-col w-full px-4 py-1 text-xl font-bold bg-gray-400 text-white border-indigo-400'>
            <h1>Exchange Data SnapShot</h1>
            <h1>{data.exchange_snapshot.timestamp}</h1>
        </div>     
        <div className='flex justify-between items-center px-3 w-full gap-9'>
              <h2 className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'> <span>Market cap (lakh)</span> {data.exchange_snapshot.market_cap_in_lakhs.equity}</h2>
              <p className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'>{data.exchange_snapshot.market_cap_in_lakhs.debt}</p>
              <span className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'><p>Fii/Fpi in (Cr)</p><p>{data.exchange_snapshot.fii_fpi_net_value_in_cr.current_value}</p></span>
              <span className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'>{data.exchange_snapshot.fii_fpi_net_value_in_cr.change}</span>
              <div className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'>
                   <p>Advances/ Declines/ Unchanged</p>
                   <div className='flex'>
                    <div className='w-[40%] h-2 bg-red-500'></div>
                    <div className='w-[50%] h-2 bg-green-500'></div>
                    <div className='w-[10%] h-2 bg-gray-500'></div>
                   </div>
              </div>
              <div className='flex flex-col bg-gray-200 px-2 py-2 text-indigo-700'>
                <p>{data.exchange_snapshot.total_securities}</p>
                <p>{data.exchange_snapshot.ad_ratio}</p>
              </div>
        </div>
    </div>
  )
}

export default index