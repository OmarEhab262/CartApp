import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import imgUser from "../assets/team-01.png";
import camera from "../assets/camera-solid.svg";
import { removeUser, updateUser } from "../store/userSlice";
import Nav from "./Nav";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const currentUser =
    users.length > 0 ? users[0] : { id: "", name: "", email: "", password: "" };

  const [newName, setNewName] = useState(currentUser.name);
  const [newEmail, setNewEmail] = useState(currentUser.email);
  const [newPassword, setNewPassword] = useState(currentUser.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: currentUser.id,
      name: newName,
      email: newEmail,
      password: newPassword,
    };
    dispatch(updateUser(updatedUser));
  };

  const handleLogout = () => {
    dispatch(removeUser({ id: currentUser.id }));
  };

  // Retrieve user object from localStorage
  const storedUser = JSON.parse(localStorage.getItem("users"));

  // Modify user object properties
  if (
    storedUser.name === currentUser.name &&
    storedUser.email === currentUser.email &&
    storedUser.password === currentUser.password
  ) {
    storedUser.name = newName;
    storedUser.email = newEmail;
    storedUser.password = newPassword;
  }

  // Save updated user object back to localStorage
  localStorage.setItem("users", JSON.stringify(storedUser));

  return (
    <>
      <Nav />
      <Cart />
      <div className="head flex justify-center mt-[40px]">
        <h2 className="text-3xl">Profile Details</h2>
      </div>
      <div className="body flex justify-center items-center flex-col">
        <div className="w-[200px] rounded-full relative my-[20px]">
          <img src="" alt="User" className="w-[200px] rounded-full" />
          <label
            htmlFor="upload"
            className="bg-white rounded-full flex justify-center items-center absolute bottom-[20px] left-9 cursor-pointer p-2"
          >
            <img src={camera} alt="Change Profile" className="w-[15px]" />
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <div className="content">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-5 justify-between">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="peer h-full w-[300px] rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className="flex items-center gap-5 justify-between">
              <label htmlFor="email">User Email</label>
              <input
                type="text"
                id="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="peer h-full w-[300px] rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <div className="flex items-center gap-5 justify-between">
              <label htmlFor="password">User Password</label>
              <input
                type="text"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="peer h-full w-[300px] rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <Link
              type="button"
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full text-center cursor-pointer   "
              to={"/"}
            >
              Log Out
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
