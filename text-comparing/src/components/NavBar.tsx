import "./NavBar.css";
import mainlogo from "../assets/mainlogo.svg";
import menuicon from "../assets/menu.svg";

export default function NavBar() {
  return (
    <div className="navbarcontainer">
      <div className="logo">
        <img src={mainlogo} alt={mainlogo} />
        <h1>ENAGRAM</h1>
      </div>
      <img src={menuicon} alt="menu" className="menu-icon" />
    </div>
  );
}
