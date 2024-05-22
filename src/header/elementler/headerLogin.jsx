import "../style/header.css";

function logAndReg() {
  return (
    <div className="logAndRegParent">
      <button className="log" onClick={logEvent}>
        Login
      </button>
      <button className="reg" onClick={regEvent}>Sign Up</button>
    </div>
  );
}


function logEvent() {
  alert("Successful login");
}

function regEvent() {
  alert("Successful registration");
}

export default logAndReg;
