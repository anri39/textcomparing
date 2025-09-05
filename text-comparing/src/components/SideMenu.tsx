import "./SideMenu.css";
import {
  Mic,
  AudioLines,
  FileText,
  Check,
  MoreHorizontal,
  ChevronsLeft,
} from "lucide-react";
import mainlogo from "../assets/mainlogo.svg";
import Aa from "../assets/Group.svg";
import ProfilePic from "../assets/profile.svg";
const menuItems = [
  { id: 1, label: "მართლმწერი", icon: Check },
  { id: 2, label: "ტექსტის შედარება", icon: Aa, isImage: true },
  { id: 3, label: "ხმა → ტექსტი", icon: Mic },
  { id: 4, label: "ტექსტი → ხმა", icon: AudioLines },
  { id: 5, label: "PDF კონვერტაცია", icon: FileText },
];

export default function SideMenu() {
  return (
    <aside
      className="sidemenu"
      style={{
        background: "#132450",
      }}
    >
      <div className="sidemenu__back-arrow">
        <ChevronsLeft size={35} style={{ color: "#FFFFFF80" }} />
      </div>

      <div className="sidemenu__logo">
        <img src={mainlogo} alt="Logo" />
        <h1>ENAGRAM</h1>
      </div>

      <nav className="sidemenu__menu">
        {menuItems.map((item) => (
          <div key={item.id} className="sidemenu__menu-item">
            {item.isImage ? (
              <img src={item.icon} alt={item.label} />
            ) : (
              <item.icon size={24} />
            )}
            <p>{item.label}</p>
          </div>
        ))}
      </nav>

      <div className="sidemenu__bottom">
        <img src={ProfilePic} alt="User" />
        <p className="fullname">თამარ ონიანი</p>
        <MoreHorizontal size={20} />
      </div>
    </aside>
  );
}
