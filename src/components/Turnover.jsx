import React, { useEffect, useState } from 'react'
import data from "../provider/turnover.json"
function Index() {
    const [categories,setCateory] = useState("Equity")
  
    
  return (
    <div>
        <div>
            {data.categories.map((category)=>{
             return   <button onClick={()=>{setCateory(category.name)}} >{category.name}</button>
            })}
        </div>
        <div>
             {categories&&data.categories.name}
        </div>
    </div>
  )
}

export default Index