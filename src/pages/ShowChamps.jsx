import React from "react";
import "../styles/App.css";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";

function ShowChamps() {
  return (
    <div className="pag">
      <Header />
      <div>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default ShowChamps;
