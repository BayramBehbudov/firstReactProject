import "./style/myMain.css";
import Title from "./elementler/title";
import MainIcon from "./img/topIcon.svg";
import Input from "./elementler/input";
import PaymentIcons from "./img/paymentIcons.svg";

function main() {
  return (
    <div className="mainParent">
      <div className="leftSection">
        <Title />
        <Input />
        <img src={PaymentIcons} alt="" />
      </div>
      <div className="rightSection">
        <img src={MainIcon} alt="" />
      </div>
    </div>
  );
}

export default main;
