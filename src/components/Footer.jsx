import React from "react";
import { Link } from "react-router-dom";
import foterdata from "../provider/footerdata.json";

function Footer() {
  return (
    <footer className="w-full bg-indigo-500 py-10 items-center px-4 shadow-md shadow-indigo-500 ">
      <section className=" w-full px-4 flex-col md:flex-row flex-wrap items-center  md:items-start lg:w-[80%]  mx-auto flex gap-5 md:gap-2 justify-evenly py-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-start items-center">
          {foterdata.route.map((data) => {
            return (
              <div className="flex flex-col gap-6" key={data.name}>
                <h1 className="text-xl text-white border-b-[2px] border-b-slate-700 w-fit">
                  {data.name}
                </h1>
                <div className="flex flex-col gap-2">
                  {data.subroutes.map((subroutes, i) => {
                    return (
                      <Link
                        to="/"
                        key={i}
                        className="text-[18px] text-white font-serif font-semibold"
                      >
                        {" "}
                        {subroutes}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-full flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-xl text-white  w-fit">
            <span>Disclaimer</span>
            <span>Terms of Use</span>
            <span> Copyright</span>
            <span>Site Map</span>
            <span> Website Policies</span>
          </div>
          <div>
            <div>
              <p>NSE NMFII</p>
            </div>
            <div>
              <p>NSE GO-BID</p>
            </div>
          </div>
        </div>
      </section>
      <p className="text-start w-[80%] mx-auto text-white font-bold">
        Copyright © 2023 National Stock Exchange of India Ltd. All rights
        reserved. Best viewed in Chrome and 1366 X 768 resolution.
      </p>
    </footer>
  );
}

export default Footer;
