import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";
import LoginNav from "../components/Shop/LoginNav";
import background from "../img/Background.jpg"

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  }, [isLoading,isSeller])
  return (
     <div>
     <LoginNav/>
     <div class="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
     <div class="hidden sm:block">
     <ShopLogin />
       </div>
       <div className="flex flex-col justify-center">
         <img  class="object-cover w-full h-full" src={background}/>
         </div>
   </div>
   </div>
  )
}

export default ShopLoginPage