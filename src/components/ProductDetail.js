import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { addItemToCart } from "../store/cartSlice";
import Cart from "./Cart";

const colorMap = {
  "": "white",
  "bg-black": "black",
  "bg-red-500": "red",
  "bg-pink-400": "pink",
  "bg-green-600": "green",
  "bg-yellow-400": "yellow",
};

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const selectedItem = useSelector((state) =>
    state.items.items.find((item) => item.id === parseInt(id))
  );
  console.log("cartItems: ", cartItems);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: selectedItem.id,
      name: selectedItem.name,
      image: selectedItem.image,
      price: selectedItem.price,
      quantity: count,
      size: selectedSize,
      color: selectedColor,
    };
    dispatch(addItemToCart(itemToAdd));
    console.log("Item added to cart:", itemToAdd);
  };

  return (
    <div>
      <Cart />
      <Nav />
      <div>
        <div className="content flex mt-[50px] justify-center lg:flex-row flex-col">
          <div className="img w-[500px]">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="rounded-xl"
            />
          </div>
          <div className="text flex flex-col  px-[50px] pt-[50px] pl-[60px] lg:w-[40%] w-full">
            <h2 className="text-[40px] font-bold">{selectedItem.name}</h2>
            <p className="text-[20px] font-medium text-blue-500 ">
              Price: ${selectedItem.price}
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
              <div className="sizes flex gap-5">
                {Object.entries(colorMap).map(([className, colorName]) => (
                  <button
                    key={colorName}
                    className={`border ${className} p-[10px] rounded-full w-[30px] h-[30px] text-center ${
                      selectedColor === colorName
                        ? `border-blue-700 border-2 `
                        : "border-gray-400"
                    }`}
                    onClick={() => setSelectedColor(colorName)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="btn flex gap-5 my-[30px]">
              <button
                className="text-white bg-black p-[10px] px-[15px] rounded-md"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <div className="text-white bg-black p-[10px] pointer  rounded-md">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
