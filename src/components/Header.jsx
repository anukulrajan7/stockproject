import React from "react";
import routedata from "../provider/routedata.json"
import { Link } from "react-router-dom";
import {AiOutlineArrowDown, AiOutlineSearch} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"
function Header() {
  return (
    <header className="flex flex-col w-full   bg-white shadow-md shadow-gray-500 sticky z-50 top-0 mb-20 ">
      <div className="flex w-full mx-auto justify-between gap-5 px-8 py-2">
      <div className="flex items-center justify-center gap-3">
        <img src="/images/Nseicon.svg" alt=""  className="w-[90px] h-auto"/>
      
      </div>
      <div className="flex w-[40%] rounded-full px-8 py-2 justify-between items-center gap-5">
        <div className="flex justify-between items-center w-[100%] gap-5 rounded-full px-4 py-2  bg-white shadow-md shadow-lime-400 border-[2px] border-indigo-500">
          <input
            type="text"
            className="text-sm font-bold w-full text-center outline-none bg-transparent text-black placeholder:text-black first-letter:capitalize"
            placeholder="search by company name and keyword and all"
          />
          <AiOutlineSearch className="text-xl font-bold"/>
        </div>
        <button className="bg-white rounded-full border-[2px] border-indigo-400 px-7 py-2 flex justify-center items-center gap-3 font-bold font-serif">English <BiSolidDownArrow/></button>
      </div>
      <div className="flex justify-center items-center gap-4 ">
         <img src="/images/Nse_image.png" alt="" className="h-[50px] " />
         <div className="data flex flex-col py-2 items-center gap-1">
               <p className="text-[18px] font-bold text-slate-900">{routedata.rate[0].sensex}</p>
               <p className="text-[18px] font-bold text-slate-900">{routedata.rate[1].lowsensex}</p>
               <p className="text-[18px] font-bold text-slate-900">{routedata.rate[2].date} date</p>
         </div>
         <div className="data flex flex-col gap-1">
               <p className="text-[18px] font-bold text-slate-900 first-letter:capitalize  flex gap-2"><span>{routedata.currency[0].company}</span>{" "} <span className="capitalize">{routedata.currency[0]?.sign}</span></p>
               <p className="text-[18px] font-bold text-slate-900 first-letter:capitalize flex gap-2">{routedata.currency[1]?.price }{" "} {routedata.currency[1]?.date}</p>
               <p className="text-[18px] font-bold text-slate-900 first-letter:capitalize flex gap-2">{routedata.currency[2]?.date}</p>
         </div>
      </div>
      </div>
      <nav className="w-full bg-indigo-600 flex justify-center items-center py-3">
        <ul className="flex text-white font-serif  w-[50%] mx-auto justify-between text-[20px] gap-8 capitalize">
            {routedata.route.map((routes)=>{
                return <Link to={routes.path}>{routes.route}</Link>
            })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
