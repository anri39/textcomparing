import "./FirstPartDropdown.css";
import downArrow from "../assets/Vector.svg";
import Aa from "../assets/Group.svg";

export default function FirstPartDropdown() {
  return (
    <div className="firstpartdropdown">
      <img src={Aa} alt="Aa icon" className="icon" />
      <h1 className="label">ტექსტის შედარება</h1>
      <img src={downArrow} alt="dropdown arrow" className="chevron" />
    </div>
  );
}
