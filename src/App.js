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
        <div className="pattern text-white text-sm font-mono cursor-pointer">
          Pattern
        </div>
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
      <div className="hidden md:block ">
        <nav className="mid-navbar bg-black flex justify-around">
          <div className="text-white text-lg cursor-pointer">
            <span className="text-red-500 text-3xl font-mono">A</span>nant
            <span className="text-red-500 text-3xl font-mono">A</span>akar
          </div>
          <div className="text-white font-mono flex justify-between">
            <div className="px-16 xl:px-24">Pattern</div>
            <div className="px-16 xl:px-24">Orders</div>
            <div className="px-16 xl:px-24">User</div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MyComponent;
