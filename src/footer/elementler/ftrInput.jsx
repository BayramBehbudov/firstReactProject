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
  alert(`Successful Subscription:  ${value}`);
}

export default ftrInput;
