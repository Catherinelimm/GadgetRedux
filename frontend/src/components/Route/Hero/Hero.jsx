import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import img from "../../../img/img1.jpg"

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[65vh] w-full bg-no-repeat ${styles.noramlFlex}`} style={backgroundImageStyle}>
      <div className={`${styles.overlay} absolute inset-0 bg-black opacity-30 backdrop-filter-[blur(15%)]`}></div>
      <div className={`${styles.section} w-[90%] bottom-50 p-10 relative text-white`}>
        <h1 className="text-3xl md:text-5xl font-bold capitalize mb-4 drop-shadow-lg">
          New and Second <br /> hand IT product
        </h1>
        <p className="text-base md:text-lg mb-6">
          This is a place where selling new and second-hand IT products
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} text-white text-lg`}>
            Shop Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
