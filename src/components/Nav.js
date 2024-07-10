import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActive, cartActive } from "../store/active"; // Assuming setActive and cartActive are correctly exported

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cartActiveState, setCartActiveState] = useState(false); // Changed variable name to avoid confusion

  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const dispatch = useDispatch();

  const cartggg = () => {
    const newCartActiveState = !cartActiveState; // Toggle the cartActiveState
    setCartActiveState(newCartActiveState);
    dispatch(cartActive({ changeCart: newCartActiveState })); // Dispatch the cartActive action with the updated state
  };
  const activeClick = (e) => {
    dispatch(setActive({ activeName: e })); // Update activeName with the clicked value
    setTimeout(() => {
      navigate("/page");
    }, 500);
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { activeName } = useSelector((state) => state.active);
  //   const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          to={"/page"}
          className={`mr-4  ${
            isNavOpen ? "hidden" : "block"
          } cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased`}
        >
          ModernMingle
        </Link>
        <div
          className={`lg:flex ${
            isNavOpen ? "block" : "hidden"
          }  justify-between w-[60%] items-center `}
        >
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => activeClick("all")}
                className={`flex items-center transition-colors ${
                  activeName === "all" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                All
              </button>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => activeClick("woman")}
                className={`flex items-center transition-colors ${
                  activeName === "woman" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                Woman
              </button>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => activeClick("man")}
                className={`flex items-center transition-colors ${
                  activeName === "man" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                Man
              </button>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <button
                onClick={() => activeClick("children")}
                className={`flex items-center transition-colors ${
                  activeName === "children" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                Children
              </button>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <Link
                to="/account"
                className="flex items-center transition-colors hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-5 ${isNavOpen ? "ml-[-5px]" : "mr-[5px]"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Account
              </Link>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              <div
                className="flex items-center transition-colors hover:text-blue-500  cursor-pointer  "
                onClick={cartggg}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-5 ${isNavOpen ? "ml-[-5px]" : "mr-[5px]"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="relative">
                  Bag
                  {cartItems.length > 0 && (
                    <span className="bg-red-600 rounded-full absolute w-[20px] h-[20px] text-center text-white right-[-18px] top-[-10px]">
                      {cartItems.length}
                    </span>
                  )}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={toggleNav}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
