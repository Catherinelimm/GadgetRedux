import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import hlogo from "../../../img/headerlogo.jpg"

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-[#053B50] sticky top-0 left-0 z-30 flex items-center justify-between px-4">
       <header className="">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={hlogo} width={60} height={50} />
        <p className="w-1/3 text-3xl font-bold text-[#EEEEEE] text-[25px] ">
        GadgetRedux
        </p>
      </div>
    </header>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
