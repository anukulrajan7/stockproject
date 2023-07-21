import React from 'react'
import marketdata from "../provider/marketdata.json"

function market() {
  return (
   <aside className='w-[50%] py-4 flex px-4 flex-col '>
        <h2 className='text-indigo-500 text-xl font-bold'>Go live</h2>
         <div className='w-full shadow-md shadow-gray-400   justify-center items-center flex flex-col'>
                <div className='flex flex-col gap-2 bg-gray-300 w-full px-4 py-2'>
                    <h1 className='text-xl font-bold text-indigo-500'>Market Information -Nifty50</h1>
                    <p>{marketdata.live_analysis.timestamp}</p>
                </div>
                <div className='flex gap-2 bg-gray-100 w-full py-3  text-xl px-4 font-bold'>
                      <p>{marketdata.live_analysis.current_value}</p>
                      <p className='text-green-500'>{marketdata.live_analysis.high.change} `(${marketdata.live_analysis.high.percentage_change})`</p>
                </div>
                <div className='grid grid-cols-4 place-items-center gap-4 bg-gray-200 py-3 w-full capitalize font-bold text-sm'>
                     <span>
                        <p>open</p>
                         <p>{marketdata.live_analysis.open}</p>
                     </span>
                     <span>
                        <p>high</p>
                         <p>{marketdata.live_analysis.high.value}</p>
                     </span>
                     <span>
                        <p>low</p>
                         <p>{marketdata.live_analysis.low}</p>
                     </span>
                     <span>
                        <p>prev close</p>
                         <p>{marketdata.live_analysis.previous_close}</p>
                     </span>
                </div>
                <div className='flex bg-gray-100 py-3 gap-4 w-full flex-wrap place-content-center font-bold text-sm '>
                     <span>
                         <p>volume</p>
                          <p>{marketdata.live_analysis.volume}</p>
                     </span>
                     <span>
                         <p>value[lakh]</p>
                          <p>{marketdata.live_analysis.value_in_lakhs}</p>
                     </span>
                     <span>
                         <p>Fcm cap</p>
                          <p>{marketdata.live_analysis.ffm_cap_in_lakhs}</p>
                     </span>
                </div>
          </div>
   </aside>     


  )
}

export default market