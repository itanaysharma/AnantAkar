import React, { useState, useReducer, useEffect } from "react";
import Clothing from "./clothing.js";
import Electronics from "./electronics.js";
import Furniture from "./furniture.js";
import Household from "./household";
// import './style.css'
import logo from "./logo.png";
import downarrow from "./downarrow.png";
const MyComponent = () => {
  return (
    <>
      <div className="md:hidden navbar flex justify-between items-center bg-black p-4">
        <div className="hamburger inline-block cursor-pointer ">
          <div className="line h-0.5 w-5 my-1 bg-white"></div>
          <div className="line h-0.5 w-5 my-1 bg-white"></div>
          <div className="line h-0.5 w-5 my-1 bg-white"></div>
        </div>
        <div className="pattern text-white text-sm font-mono">Pattern</div>
        <div className="text-white text-base cursor-pointer">
          <span className="text-red-500 text-lg font-mono">A</span>
          <span className="text-red-500 text-lg font-mono">A</span>
        </div>
        <div className="orders text-white text-sm font-mono cursor-pointer">
          Order
        </div>
        <div className="user text-white text-sm font-mono cursor-pointer">
          User
        </div>
      </div>
      <div className="hidden md:flex justify-between">
        <div className="h-screen text-white text-base bg-black flex flex-col justify-between">
          <div className="font-extrabold xl:text-xl 2xl:text-2xl p-5 md:pl-5 md:pr-20 xl:pl-10 xl:pr-32 2xl:pr-44">
            <span className="text-red-500 text-3xl xl:text-4xl 2xl:text-5xl font-mono">
              A
            </span>
            nanat
            <span className="text-red-500 text-3xl xl:text-4xl 2xl:text-5xl font-mono">
              A
            </span>
            akar
          </div>
          <div className=" mb-20 text-xl font-mono">
            <div className=" cursor-pointer">Clothing</div>
            <div className=" cursor-pointer">Clothing</div>
            <div className=" cursor-pointer">Clothing</div>
            <div className=" cursor-pointer">Clothing</div>
          </div>
          <div className="pb-16">
            <div>Return</div>
            <div>Return</div>
            <div>Return</div>
          </div>
        </div>
        <div className="flex-col font-mono font-bold py-4 xl:py-6 2xl:py-7">
          <div className="flex">
            <div className="md:px-16 xl:px-20 xl:text-lg 2xl:text-xl">
              <span className="cursor-pointer">Pattern</span>
            </div>
            <div className="md:px-16 xl:px-20 xl:text-lg 2xl:text-xl">
              <span className="cursor-pointer">Orders</span>
            </div>
            <div className="md:px-16 xl:px-20 xl:text-lg 2xl:text-xl">
              <span className="cursor-pointer">User</span>
            </div>
          </div>
          <div>Content</div>
        </div>
      </div>
    </>
  );
};
export default MyComponent;
