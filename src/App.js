import React, { useState } from 'react';
import Clothing from './clothing.js'
import Electronics from './electronics.js';
import Furniture from './furniture.js'
import Household from './household'
// import './style.css'
import logo from './logo.png'
import downarrow from './downarrow.png'
const MyComponent = () => {
  const [isClickedClothing, setIsClickedClothing] = useState(false)
  const [isClickedElectronic, setIsClickedElectronic] = useState(false)
  const [isClickedFurniture, setIsClickedFurniture] = useState(false)
  const [isClickedHousehold, setIsClickedHousehold] = useState(false)
  return (
    <div className="flex justify-between">
      <div className=" bg-black pl-8 cursor-pointer">
        <div className="pt-6 pl-3 pr-24 text-white font-mono text-2xl flex space-x-1">
          <img src={logo} className="h-8" alt='logo' />
          <div className="">
            <span className="text-red-500 text-3xl">A</span>nant<span className="text-red-500 text-3xl">A</span>akar
          </div>
        </div>
      <div className="h-screen text-white flex flex-col justify-between pb-28">
        <ul className=" pl-8 pt-14 space-y-6 text-xl font-mono ">
          <li className="cursor-pointer  hover:text-red-400" >
          <div className="flex justify-between pr-10">
           <span>Clothing</span> 
           <span className="pt-1"><img src={downarrow} onClick={()=>setIsClickedClothing((current)=>!current)} className="h-6 p-1" alt="arrow not found" /></span>
          </div>
          
            {isClickedClothing && (
              <Clothing />
            )}
          </li>
          <li className="cursor-pointer  hover:text-red-400">
          <div className="flex justify-between pr-10">
           <span>Electronics</span> 
           <span className="pt-1"><img src={downarrow} onClick={()=>setIsClickedElectronic((current)=>!current)} className="h-6 p-1 " alt="arrow not found" /></span>
          </div>
            {
              isClickedElectronic && (
                <Electronics />
              )
            }
          </li>
          <li className="cursor-pointer  hover:text-red-400">
          <div className="flex justify-between pr-10">
           <span>Furniture</span> 
           <span className="pt-1"><img src={downarrow} onClick={()=>setIsClickedFurniture((current)=>!current)} className="h-6 p-1 " alt="arrow not found" /></span>
          </div>
            {
              isClickedFurniture && (
                <Furniture />
              )
            }
          </li>
          <li className="cursor-pointer  hover:text-red-400">
          <div className="flex justify-between pr-10">
           <span>HouseHold</span> 
           <span className="pt-1"><img src={downarrow} onClick={()=>setIsClickedHousehold((current)=>!current)} className="h-6 p-1 " alt="arrow not found" /></span>
          </div>
            {
              isClickedHousehold && (
                <Household />
              )
            }
          </li>
        </ul>
 
        <ul className="pl-8 space-y-1 font-mono text-sm">
          <li className="cursor-pointer hover:text-lg hover:text-red-200">Return</li>
          <li className="cursor-pointer hover:text-lg hover:text-red-200">Sell Products</li>
          <li className="cursor-pointer hover:text-lg hover:text-red-200">Sell Patterns</li>
          <li className="cursor-pointer hover:text-lg hover:text-red-200">Contact Us</li>
        </ul>
      </div>
      </div>
      <div>
      <nav className= "flex justify-end font-extrabold" >
        <ul className="flex space-x-20 px-16 py-6 text-xl font-mono">
        <li className="cursor-pointer hover:text-gray-500">Patterns</li>
        <li className="cursor-pointer hover:text-gray-500">Sign In</li>
        <li className="cursor-pointer hover:text-gray-500">Orders</li>
        </ul>
      </nav>
      </div>
    </div>
    
  );
};

export default MyComponent;
