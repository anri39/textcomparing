import "./InputBoxes.css";
import updownArrow from "../assets/arrow.svg";

export default function InputBoxes() {
  return (
    <div className="inputboxescontainer">
      <div className="textarea-wrapper">
        <textarea
          className="inputbox"
          placeholder="ჩაწერეთ პირველი ტექსტი აქ"
        />
        <img src={updownArrow} alt="swap texts" className="swap-icon" />
        <textarea className="inputbox" placeholder="ჩაწერეთ მეორე ტექსტი აქ" />
      </div>
      <button className="comparebtn">შედარება</button>
    </div>
  );
}
