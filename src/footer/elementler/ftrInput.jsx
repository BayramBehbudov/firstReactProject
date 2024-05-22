import "../style/footer.css";

function ftrInput() {
  return (
    <div className="inputContainer">
      <input
        className="footerEmailInput"
        type="text"
        placeholder="Enter your email"
      />
      <button onClick={startedEvent}>Subcribe</button>
    </div>
  );
}

function startedEvent() {
  let value = document.querySelector(".footerEmailInput").value;
  if (isValidEmail(value)) {
    alert(`Successful Subscription:  ${value}`);
  }else{
    alert(`Please enter valid mail`);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export default ftrInput;
