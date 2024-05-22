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
  alert(`Successful Subscription:  ${value}`);
}
export default input;
