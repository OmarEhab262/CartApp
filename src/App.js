import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Page from "./components/Page";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail"; // Import the ProductDetail component
import EditCartItem from "./components/EditCartItem";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App cairo-custom">
      {" "}
      {/* Use the custom class here */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/page" element={<Page />} />
          {/* Route for displaying all products */}
          <Route path="/products" element={<Products />} />
          <Route path="/edit/:id" element={<EditCartItem />} />
          {/* Route for displaying product details */}
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
