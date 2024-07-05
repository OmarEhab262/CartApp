import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateCartItem } from "../store/cartSlice";
import Nav from "./Nav";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartActive } from "../store/active";

const colorMap = {
  "": "white",
  "bg-black": "black",
  "bg-red-500": "red",
  "bg-pink-400": "pink",
  "bg-green-600": "green",
  "bg-yellow-400": "yellow",
};

const EditCartItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const itemToEdit = cartItems.find((item) => item.id === parseInt(id));

  const [count, setCount] = useState(itemToEdit.quantity);
  const [selectedSize, setSelectedSize] = useState(itemToEdit.size);
  const [selectedColor, setSelectedColor] = useState(itemToEdit.color);

  const handleUpdateCart = () => {
    dispatch(
      updateCartItem({
        id: itemToEdit.id,
        quantity: count,
        size: selectedSize,
        color: selectedColor,
      })
    );
    toast.success("Cart item updated successfully!");
    setTimeout(() => {
      dispatch(cartActive({ changeCart: false }));
      navigate("/page");
    }, 2000); // Delay to allow the toast to be visible before navigating away
  };

  useEffect(() => {
    if (!itemToEdit) {
      navigate("/cart");
    }
  }, [itemToEdit, navigate]);

  return (
    <div>
      <Nav />
      <div className="content flex mt-[50px] justify-center lg:flex-row flex-col">
        <div className="img lg:w-[500px] w-[90%] ">
          <img
            src={itemToEdit.image}
            alt={itemToEdit.name}
            className="rounded-xl"
          />
        </div>
        <div className="text flex flex-col px-[50px] pt-[50px] pl-[60px] lg:w-[40%] w-full">
          <h2 className="text-[40px] font-bold">{itemToEdit.name}</h2>
          <p className="text-[20px] font-medium text-blue-500">
            Price: ${itemToEdit.price}
          </p>
          <p className="text-[20px] mt-[30px] mb-[10px]">Size</p>
          <div className="sizes flex gap-10 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`text-black border border-blue-700 p-[10px] rounded-full w-[45px] h-[45px] text-center hover:bg-blue-500 ease-out duration-300 ${
                  selectedSize === size ? "bg-blue-500" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-[20px] mt-[30px] mb-[10px]">Color</p>
          <div className="sizes flex gap-5">
            {Object.entries(colorMap).map(([className, colorName]) => (
              <button
                key={colorName}
                className={`border ${className} p-[10px] rounded-full w-[30px] h-[30px] text-center ${
                  selectedColor === colorName
                    ? "border-blue-700 border-2"
                    : "border-gray-400"
                }`}
                onClick={() => setSelectedColor(colorName)}
              ></button>
            ))}
          </div>
          <div className="btn flex gap-5 my-[30px]">
            <div className="text-white bg-black p-[10px] pointer rounded-md">
              <button
                onClick={() => setCount(count + 1)}
                className="pointer mx-[15px]"
              >
                +
              </button>
              {count}
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="pointer mx-[15px]"
              >
                -
              </button>
            </div>
            <button
              className="text-white bg-black p-[10px] px-[15px] rounded-md"
              onClick={handleUpdateCart}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <Cart />
      <ToastContainer />
    </div>
  );
};

export default EditCartItem;
