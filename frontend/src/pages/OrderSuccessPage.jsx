import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful !!
      </h5>
      <br />
      <br />
      <Link to="/profile">
        <p className="text-center mb-14 text-[black] underline">
          You can click here to see your order
          </p>
          </Link>
    </div>
  );
};


export default OrderSuccessPage;
