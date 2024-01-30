import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from "../components/Signup/Signup";
import Navsign from "../components/Signup/Navsign";
import background from "../img/Background.jpg"

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  return (
    <div>
    <Navsign/>
    <div class="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
    <div class="hidden sm:block">
              <img  class="object-cover w-full h-full" src={background}  />
              </div>
              <div className="flex flex-col justify-center">
               <Signup />
              </div>
  </div>
  </div>
  )
}

export default SignupPage