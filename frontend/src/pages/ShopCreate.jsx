import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate";
import SignupNav from "../components/Shop/SignupNav";
import background from "../img/Background.jpg"

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
  return (
     <div>
     <SignupNav/>
     <div class="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
     <div class="hidden sm:block">
               <img  class="object-cover w-full h-full" src={background}  />
               </div>
               <div className="flex flex-col justify-center">
               <ShopCreate />
               </div>
   </div>
   </div>
  )
}

export default ShopCreatePage