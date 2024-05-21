import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header/header.jsx";

import Main from "./myMain/myMain.jsx";
import Footer from "./footer/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>
);
