import React, { useState, useReducer, useEffect } from "react";
import Clothing from "./clothing.js";
import Electronics from "./electronics.js";
import Furniture from "./furniture.js";
import Household from "./household";
// import './style.css'
import logo from "./logo.png";
import downarrow from "./downarrow.png";
const MyComponent = () => {
  const initialStates = {
    clothing: false,
    electronic: false,
    furniture: false,
    household: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        return {
          ...state,
          [action.payload]: !state[action.payload],
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialStates);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const djangoServerUrl = "http://localhost:8000/";
  if (!data) {
    return "Loading...";
  }
  return (
    <div className="flex">
      <div className=" bg-black pl-8 cursor-pointer ">
        <div className="pt-6 pl-3 pr-24 text-white font-mono text-2xl flex space-x-1">
          <img src={logo} className="h-8" alt="logo" />
          <div className="">
            <span className="text-red-500 text-3xl">A</span>nant
            <span className="text-red-500 text-3xl">A</span>akar
          </div>
        </div>
        <div className="h-screen text-white flex flex-col justify-between pb-3.5">
          <div className=" ">
            <ul className=" pl-8 pt-14 space-y-6 text-xl font-mono ">
              <li className="cursor-pointer  hover:text-red-400">
                <div className="flex justify-between pr-10">
                  <span>Clothing</span>
                  <span className="pt-1">
                    <img
                      src={downarrow}
                      onClick={() =>
                        dispatch({ type: "toggle", payload: "clothing" })
                      }
                      className="h-6 p-1"
                      alt="arrow not found"
                    />
                  </span>
                </div>
                {state.clothing && <Clothing />}
              </li>
              <li className="cursor-pointer  hover:text-red-400">
                <div className="flex justify-between pr-10">
                  <span>Electronics</span>
                  <span className="pt-1">
                    <img
                      src={downarrow}
                      onClick={() =>
                        dispatch({ type: "toggle", payload: "electronic" })
                      }
                      className="h-6 p-1 "
                      alt="arrow not found"
                    />
                  </span>
                </div>
                {state.electronic && <Electronics />}
              </li>
              <li className="cursor-pointer  hover:text-red-400">
                <div className="flex justify-between pr-10">
                  <span>Furniture</span>
                  <span className="pt-1">
                    <img
                      src={downarrow}
                      onClick={() =>
                        dispatch({ type: "toggle", payload: "furniture" })
                      }
                      className="h-6 p-1 "
                      alt="arrow not found"
                    />
                  </span>
                </div>
                {state.furniture && <Furniture />}
              </li>
              <li className="cursor-pointer  hover:text-red-400">
                <div className="flex justify-between pr-10">
                  <span>HouseHold</span>
                  <span className="pt-1">
                    <img
                      src={downarrow}
                      onClick={() =>
                        dispatch({ type: "toggle", payload: "household" })
                      }
                      className="h-6 p-1 "
                      alt="arrow not found"
                    />
                  </span>
                </div>
                {state.household && <Household />}
              </li>
            </ul>
          </div>
          {/* <div className="h-[50vh] overflow-auto">
        </div> */}
          <footer>
            <ul className="pl-8 space-y-1 font-mono text-sm pb-16">
              <li className="cursor-pointer hover:text-base hover:text-red-200">
                Return
              </li>
              <li className="cursor-pointer hover:text-base hover:text-red-200">
                Sell Products
              </li>
              <li className="cursor-pointer hover:text-base hover:text-red-200">
                Sell Patterns
              </li>
              <li className="cursor-pointer hover:text-base hover:text-red-200">
                Contact Us
              </li>
            </ul>
          </footer>
        </div>
      </div>
      <div>
        <nav className="flex justify-end font-extrabold pl-96 ml-28">
          <ul className="flex space-x-20 px-2 py-6 text-xl font-mono">
            <li className="cursor-pointer hover:text-gray-500">Patterns</li>
            <li className="cursor-pointer hover:text-gray-500">User</li>
            <li className="cursor-pointer hover:text-gray-500">Orders</li>
          </ul>
        </nav>
        <div>);</div>
      </div>
    </div>
  );
};

export default MyComponent;
