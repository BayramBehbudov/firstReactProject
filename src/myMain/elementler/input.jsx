import "../style/myMain.css";

function input() {
  return (
    <div className="inputContainer">
      <input
        className="mainEmailInput"
        type="text"
        placeholder="Enter your email"
      />
      <button onClick={startedEvent}>Get started</button>
    </div>
  );
}
function startedEvent() {
  let value = document.querySelector(".mainEmailInput").value;
  if (isValidEmail(value)) {
    alert(`Successful Subscription:  ${value}`);
  } else {
    alert(`Please enter valid mail`);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export default input;
