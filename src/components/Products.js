import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "../store/itemsSlice";
import { addItemToCart } from "../store/cartSlice"; // Import the action
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const { activeName } = useSelector((state) => state.active);
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  const filteredItems =
    activeName && activeName !== "all"
      ? items.filter((item) => item.type === activeName)
      : items;

  const handleItemClick = (item) => {
    dispatch(selectItem(item));
  };

  const addToCartHandler = (item) => {
    dispatch(addItemToCart(item)); // Dispatch addItemToCart action with the item
    toast.success("Added to Cart successfully!");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-[20px] mt-[40px]">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#F0F0F0] dark:border-gray-700"
          >
            <Link
              to={`/products/${item.id}`}
              onClick={() => handleItemClick(item)}
            >
              <img
                className="p-8 rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
            </Link>

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                {item.name}
              </h5>

              <div className="flex items-center flex-col lg:flex-row justify-between my-[10px] gap-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-black">
                  ${item.price}
                </span>
                <button
                  onClick={() => addToCartHandler(item)} // Call addToCartHandler on button click
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Products;
