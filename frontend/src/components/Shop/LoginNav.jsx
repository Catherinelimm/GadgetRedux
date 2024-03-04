import React from "react";
import hlogo from "../../img/headerlogo.jpg"
import { Link } from "react-router-dom";

const Navsign = () => {
  return (
    <header className="border-b bg-[#053B50] border-gray-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={hlogo} width={60} height={50} />
        <Link to="/">
            <p className="w-1/3 text-3xl font-bold text-[#EEEEEE] text-[25px] ">
        GadgetRedux
        </p>
            </Link>
        <p className="w-full text-3xl font-bold text-[#64CCC5] text-[20px] ml-4">
          Log In for seller
        </p>
      </div>
    </header>
  );
};

export default Navsign;