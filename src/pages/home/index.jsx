import React from 'react'
import Tools from "../../components/Tool"
import StockData from "../../components/Stock"
import MarketInfo from "../../components/Market"
import Exchange from "../../components/Exchange"
import TurnOver from "../../components/Turnover"
function Home() {
  return (
    <main className='w-full min-h-screen flex flex-col'>
        <div className='flex gap-5 justify-between w-[80%] mx-auto'>
          <MarketInfo/>
        <StockData/>
        </div>
        <Exchange/>
        <TurnOver/>
         <Tools/>
    </main>
  )
}

export default Home