import React from 'react'

function ETFs({data}) {
  return (
      
    <div className="flex gap-5 flex-col items-start px-4 py-2 ">
      <h1 className="text-xl font-serif font-bold text-indigo-500">{data.intraday_trade.heading}</h1>
      <span className="text-xl font-serif font-bold text-indigo-500">{data.intraday_trade.timestamp}</span>
      <span className="flex gap-5 items-center text-black text-sm font-serif font-bold">
        <p>{data.intraday_trade.volume_lakhs} value lakh</p>
        <p>{data.intraday_trade.value_lakhs} volume lakh</p>
      </span>
    </div>
  )
}

export default ETFs