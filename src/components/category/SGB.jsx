import React from 'react'

function SGB({data}) {
   
  return (
    <div className='w-full bg-gray-50 flex  flex-col gap-5 items-start justify-center py-4 px-3'>
        
    <span className='text-indigo-500 text-2xl font-serif font-bold'>{data.intraday.heading}</span>
   <span className='text-indigo-300 text-xl font-serif font-bold'>{data.intraday.timestamp}</span>
   <div className='flex w-full items-center justify-between place-content-start text-gray-700'>
       <span>{data.intraday.volume_lakhs }</span>
       <span>{data.intraday.value_lakhs}</span>
   </div>
</div>
  )
}

export default SGB