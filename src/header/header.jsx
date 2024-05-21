import "./style/header.css";

import Img from "./img/headerIcon.svg";
import LogAndReg from "./elementler/headerLogin.jsx";
import NavBar from "./elementler/headerNavBar.jsx";

function header() {
  return (
    <div className="headerParent">
      <div className="headerSection">
        <img src={Img} alt="" />
        <NavBar />
      </div>
      <div className="headerSection">
        <LogAndReg />
      </div>
    </div>
  );
}

export default header;
