import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/page");
  }, 2000);
  const { name } = useSelector((state) => state.user);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1 className="text-[50px] text-center my-auto  border border-gray-500 border-[4px] rounded-xl p-[30px]">
        Welcome back <span className="font-bold">{name}</span>{" "}
      </h1>
    </div>
  );
};

export default Welcome;
