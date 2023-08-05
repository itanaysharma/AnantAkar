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
      <nav className="hidden md:flex justify-between">
        <div className="font-extrabold md:w-56 xl:w-96 bg-black text-white xl:pl-10 md:pl-5 xl:py-2 md:py-1">
          <span className="text-red-500 text-3xl xl:text-4xl font-mono">A</span>
          nanat
          <span className="text-red-500 text-3xl xl:text-4xl font-mono">A</span>
          akar
        </div>
        <div className="flex space-x-8 font-mono items-center font-bold">
          <span className="hover:text-gray-600 pl-2">Pattern</span>
          <span className="md:px-28 xl:px-36 "> Orders</span>
          <span className="pr-10"> User</span>
        </div>
      </nav>
      <section className="flex space-x-10 justify-between">
        <div className=" mb-20 text-xl font-mono h-screen bg-black text-white md:w-56 xl:w-96 pl-10 xl:min-w-[24rem] md:min-w-[14rem] ">
          <div className=" cursor-pointer">Clothing</div>
          <div className=" cursor-pointer">Clothing</div>
          <div className=" cursor-pointer">Clothing</div>
          <div className=" cursor-pointer">Clothing</div>
        </div>
        <div className="hidden md:block content bg-gray-200 overflow-auto">
          Loren ipsum ajdksfjkjaldfsjalkdjsfklj jlkasdjkfj klajsdfl kjasdfkl
          jalkdfjs Loren ipsum ajdksfjkjaldfsjalkdjsfklj jlkasdjkfj klajsdfl
          kjasdfkl jalkdfjs Loren ipsum ajdksfjkjaldfsjalkdjsfklj
          asdfklasdflkjasdf lkjjasdflkjasdfkjl lkjasdflkjasdflkj
          asdfijolmknasodfjkp[kjandskfj]
        </div>
      </section>

      {/* <div className="hidden md:flex absolute">
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
        {/* <section className="bg-green-500 px-28">You know it all</section> */}
      {/* <div className="flex-col font-mono font-bold py-4 bg-gray-200">
          <nav className="flex justify-between">
            <section className="md:w-10 xl:w-32 xl:w-64 2xl:w-80"></section>
            <nav className="flex">
              <span className="w-32 md:pl-24 xl:pl-60 2xl:pl-96"></span>
              <span className="md:pl-24 xl:pl-60 2xl:pl-96 "> Pattern </span>
              <span className="md:px-28 xl:px-36"> Orders</span>
              <span className=""> User</span>
            </nav>
          </nav>
          <section></section>
        </div>
      </div> */}
    </>
  );
};
export default MyComponent;
