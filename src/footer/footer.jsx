import "./style/footer.css";
import FotrIcon from "./img/footerIcon.svg";
import Input from "./elementler/ftrInput.jsx";
import SosialSvg from "./img/sosial.svg";
import FooterLeft from "./elementler/footerLeft.jsx";
import FooterCenter from "./elementler/footerCenter.jsx";
import FooterRight from "./elementler/footerRight.jsx";


function footer() {
  return (
    <div className="footer">
      <div className="footerCont">
        <div className="footerSection left">
          <img src={FotrIcon} alt="" />
          <h3>Want to recieve our awesome stories?</h3>
          <Input />
          <p>© bayram.behbudov@gmail.com, All rights reserved.</p>
        </div>
        <div className="footerSection right">
          <div className="rightTop">
            <FooterLeft />
            <FooterCenter />
            <FooterRight />
          </div>
          <div className="rightBottom">
            <img src={SosialSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
