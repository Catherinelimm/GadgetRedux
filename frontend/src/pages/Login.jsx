import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login.jsx";
import Navlogin from "../components/Login/Navlogin.jsx";
import background from "../img/Background.jpg"

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  
  return (
    <div>
      <Navlogin/>
      <div class="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div class="hidden sm:block">
        <Login />
        </div>
        <div className="flex flex-col justify-center">
          <img  class="object-cover w-full h-full" src={background}/>
          </div>
    </div>
    </div>
  )
}

export default LoginPage;