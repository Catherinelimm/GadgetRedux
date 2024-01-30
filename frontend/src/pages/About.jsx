import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const About = () => {
  return (
    <div>
      <Header activeHeading={5} />

      <div className="container mx-auto mt-10 p-5">
        <h2 className="text-3xl font-bold mb-5">About Us</h2>

        <p>
          Welcome to our platform! We are your go-to destination for buying both
          second-hand and new IT products. Our platform is designed to be a
          versatile and user-friendly marketplace where buyers and sellers
          alike can connect.
        </p>

        <p>
          What sets us apart is our commitment to providing a multivendor
          platform. This means anyone can join as a seller, offering a diverse
          range of IT products to our community. Whether you are looking for a
          budget-friendly option or a high-end gadget, you'll find it here.
        </p>

        <p>
          One unique feature of our platform is the ability for sellers and
          buyers to access the price history graph. This tool helps you
          determine the optimal price for your listed items by referencing past
          price trends. It's a valuable resource that contributes to a fair and
          transparent marketplace.
        </p>

        <p>
          Join our community and explore the world of IT products. Whether you
          are a tech enthusiast or someone looking for a good deal, you'll find
          what you need at our platform. Happy shopping!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
