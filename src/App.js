import React, { useState } from "react";
import "./App.css";

//estructural import
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";

//pages import
import Home from "./components/pages/Home/Home";
import Info from "./components/pages/Info/Info";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className="App">
      <>
        <Header
          onClickHome={() => setCurrentPage("Home")}
          onClickInfo={() => setCurrentPage("Info")}
        />
      </>
      <>
        {currentPage === "Home" && <Home />}
        {currentPage === "Info" && <Info />}
      </>
      <>
        <Footer />
      </>
    </div>
  );
}
