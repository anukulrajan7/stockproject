import React, { useState } from "react";
import data from "../provider/turnover.json";
import Equity from "./category/Equity";
import ETFs from "./category/ETFs.jsx";
import MFSS from "./category/MFSS.jsx";
import SLBs from "./category/SLBs.jsx";
import SGB from "./category/SGB.jsx";
import SME from "./category/SME.jsx"
function Turntransaction() {
  const [categories, setCategory] = useState(data.categories[0]);
  console.log(data.categories[0])
  

  return (
    <div className="py-8 w-[50%] bg-white shadow-md ">
      <div className="w-full flex  justify-between bg-indigo-500 items-center">
        {data.categories.map((category) => {
          return (
            <button
              key={category.name}
              className={"text-white w-fit  text-center py-2 px-5 shadow-md"+(categories.name===category.name? "bg-indigo-600 ":"")}
              onClick={() => {
                setCategory(category);
              }}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        {(categories.name === "Equity" && <Equity data={categories.data} />) ||
          (categories.name === "ETFs" && <ETFs data={categories.data} />) ||
          (categories.name === "MFSS" && <MFSS  data={categories.data}/>) ||
          (categories.name === "SLBs" && <SLBs data={categories.data} />) ||
          (categories.name === "SGB" && <SGB data={categories.data}/>)|| (categories.name === "SME" && <SME data={categories.data}/>)}
      </div>
    </div>
  );
}

export default Turntransaction;
