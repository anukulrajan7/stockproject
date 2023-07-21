import React from 'react'
import Tools from "../../components/Tool"
import StockData from "../../components/Stock"
import MarketInfo from "../../components/Market"
import Exchange from "../../components/Exchange"

import DataTable from '../../components/Data'
import TurnOver from '../../components/Turntransaction'
function Home() {
  return (
    <main className='w-full min-h-screen flex flex-col'>
        <div className='flex gap-5 justify-between w-[80%] mx-auto'>
          <MarketInfo/>
        <StockData/>
        </div>
        <Exchange/>
         <div className='flex lg:w-[80%] mx-auto py-4 justify-between'>
            <TurnOver/>
            <DataTable/>
         </div>
         <Tools/>
    </main>
  )
}

export default Home