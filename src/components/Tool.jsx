import React from 'react'
import toolsdata from "../provider/toosdata.json"
function Tools() {
  return (
    <section className='w-full py-5 px-4 bg-gray-200'>
           <div className='lg:w-[80%] w-full mx-auto flex-col gap-4 '>
              <h1 className='text-5xl font-bold text-slate-900 font-serif  first-letter:capitalize text-center my-3'>tools</h1>
               <div className="cards lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-4 grid gap-3">
                   {
                    toolsdata.tools.map((item)=>{
                        return <div key={item.name} className=' flex flex-col rounded-md gap-4 w-full overflow-hidden px-4 py-3 bg-white shadow-md shadow-gray-300 '>
                                <h2 className='text-indigo-600 text-2xl font-bold font-serif'>{item.name}</h2>
                                <p className='text-[18px] ' >{item.description}</p>
                        </div>
                    })
                   }     
               </div>
           </div>
    </section>
  )
}

export default Tools