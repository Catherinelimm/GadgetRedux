import React from 'react'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import hlogo from "../../img/headerlogo.jpg"

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-[#053B50] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
        <header className="">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img src={hlogo} width={60} height={50} />
        <p className="w-1/3 text-3xl font-bold text-[#EEEEEE] text-[25px] ">
        GadgetRedux
        </p>
      </div>
    </header>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="white"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="white" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="white"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader