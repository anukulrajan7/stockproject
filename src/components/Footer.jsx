import React from 'react'
import { Link } from 'react-router-dom'
import foterdata from "../provider/footerdata.json"
import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
function Footer() {
  return (
    <footer className='w-full bg-indigo-500 py-10 items-center px-4 shadow-md shadow-indigo-500 '>
        <section className='lg:w-[80%] items-center justify-between mx-auto flex gap-2 py-4'>
            <div className='grid grid-cols-3 gap-5 justify-start items-center'>
                        {foterdata.route.map((data)=>{
                        return <div className='flex flex-col gap-6'  key={data.name}>
                             <h1 className='text-xl text-white border-b-[2px] border-b-slate-700 py-2 w-fit' >{data.name}</h1>
                              <div className='flex flex-col gap-2'>
                                  {
                                    data.subroutes.map((subroutes,i)=>{
                                        return <Link to= "/" key={i}  className='text-[18px] text-white font-serif font-semibold'> {subroutes}</Link>
                                    })
                                  }
                              </div>
                        </div>
                        })}
            </div>
            
            
        </section> 
        <p className='text-start w-[80%] mx-auto text-white font-bold'>Copyright © 2023
National Stock Exchange of India Ltd. All rights reserved. Best viewed in Chrome and 1366 X 768 resolution.</p>
    </footer>
  )
}

export default Footer