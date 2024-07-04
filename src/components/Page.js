import React from "react";
import Nav from "./Nav";
import Products from "./Products";
import Cart from "./Cart";

const Page = () => {
  return (
    <div>
      <Cart />
      <Nav />
      <Products />
    </div>
  );
};

export default Page;
