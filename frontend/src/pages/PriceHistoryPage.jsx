import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import PriceHistory from "../components/PriceHistory/PriceHistory";
const PriceHistoryPage = () => {
  return (
    <>
      <div>
        <Header activeHeading={4} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <PriceHistory />
          <br/>
          <br/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PriceHistoryPage;
