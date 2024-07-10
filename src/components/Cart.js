import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActive } from "../store/active";
import { removeItemFromCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import cart from "../assets/x-solid.svg";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  // Calculate total price of all items in the cart
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const { changeCart } = useSelector((state) => state.active);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartActive({ changeCart: false }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div
      className={`${
        changeCart ? "right-0" : "right-[-300px]"
      } fixed bg-white overflow-scroll ease-in duration-300 overflow-x-hidden h-[70vh] right-0 border-2 border-gray-400 w-[300px] z-20 rounded-tl-2xl rounded-bl-2xl top-[10px]`}
    >
      <div className="head flex justify-between">
        <h1 className="text-2xl p-[20px]">
          Cart{" "}
          {users.map((user) => (
            <span key={user.id}>{user.name}</span>
          ))}{" "}
        </h1>

        <img
          src={cart}
          onClick={handleClearCart}
          alt=""
          className="w-[20px] mr-[20px] cursor-pointer"
        />
      </div>
      <div className="body">
        {cartItems.length === 0 ? (
          <p className="text-center p-4">Your cart is empty</p>
        ) : (
          <div className="items">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="item flex p-4 border-b border-gray-300 relative"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[100px] h-[100px] my-auto rounded-xl"
                />
                <div className="info ml-[20px]">
                  <p className="font-bold">{item.name}</p>
                  <p>quantity: {item.quantity}</p>
                  <p className={!item.size ? "hidden" : ""}>
                    Size: {item.size}
                  </p>
                  <p className={!item.color ? "hidden" : ""}>
                    Color: {item.color}
                  </p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="actions">
                  <img
                    src={cart}
                    onClick={() => handleRemoveItem(item.id)}
                    alt=""
                    className="w-[13px] mr-[20px] absolute left-6 top-8 cursor-pointer"
                  />

                  <Link
                    to={`/edit/${item.id}`}
                    className="text-blue-500 font-bold absolute right-6 top-4"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
            <div className="total-price">
              <p className="font-bold text-xl my-4 ml-3">
                Total Price: ${total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
