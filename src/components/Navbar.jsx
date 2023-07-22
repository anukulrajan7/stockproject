import React, { useState } from "react";
import routedata from "../provider/routedata.json"
import { Link } from "react-router-dom";
import { AiOutlineSearch} from "react-icons/ai"
import {BiSolidDownArrow} from "react-icons/bi"
import {RxCross1} from "react-icons/rx"
function Header() {
  const [toggle,setToggle] = useState(false)
  return (
    <header className="flex flex-col w-full relative  bg-white shadow-md shadow-gray-500  z-30 top-0 mb-20 ">
      <div className="flex flex-col lg:flex-row w-full mx-auto justify-between gap-5 px-8 py-2">
      <div className="flex items-center justify-center gap-3">
        <img src="/images/Nseicon.svg" alt=""  className="w-[90px] h-auto"/>
      
      </div>
      <div className="flex w-full flex-col md:flex-row lg:w-[40%] rounded-full px-8 py-2 justify-between items-center gap-5">
        <div className="flex justify-between items-center w-[100%] gap-5 rounded-full px-4 py-2  bg-white shadow-md shadow-lime-400 border-[2px] border-indigo-500">
          <input
            type="text"
            className="text-sm font-bold w-full text-center outline-none bg-transparent text-black placeholder:text-black first-letter:capitalize"
            placeholder="search by company name and keyword and all"
          />
          <AiOutlineSearch className="text-xl font-bold"/>
        </div>
          <button onClick={()=>{setToggle(!toggle)}} className="block md:hidden bg-white  text-indigo-500 w-fit px-5 py-2 shadow-md">Menu</button>
        <button className="bg-white rounded-full border-[2px] border-indigo-400 px-7 py-2 flex justify-center items-center gap-3 font-bold font-serif">English <BiSolidDownArrow/></button>
      </div>
      <div className="hidden justify-center items-center gap-4 lg:flex ">
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
      <nav className={toggle?"w-full h-[100vh] duration-500 transition-all bg-[#ffffffa3] fixed top-0 bottom-0 py-5 justify-evenly flex items-center flex-col right-0 left-0 z-50":"hidden"}>
             <div className="w-fit py-3 px-5 flex justify-center items-center">                  <RxCross1 onClick={()=>{setToggle(!toggle)}} className="text-indigo-700 text-3xl font-bold"/></div>
        <ul className="flex bg-indigo-700 text-white font-serif items-center w-full flex-col md:flex-row justify-center  text-center px-10  py-4 bg-transparent  lg:w-[50%] mx-auto text-[20px] gap-8 capitalize">
            {routedata.route.map((routes,i)=>{
                return <Link key={i} to={routes.path} className="text-indigo-700 bg-white w-full py-3 font-bold font-serif px-5 shadow-md">{routes.route}</Link>
            })}
        </ul>
      </nav>
      <nav className={"hidden md:flex py-3 bg-indigo-500 item-center w-full  "}>

        <ul className="flex bg-indigo-700 text-white font-serif items-center w-full  justify-evenly  text-center px-2  py-4 bg-transparent  lg:w-[50%] mx-auto text-[20px] gap-8 capitalize">
            {routedata.route.map((routes,i)=>{
                return <Link key={i} to={routes.path} className="text-white">{routes.route}</Link>
            })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
