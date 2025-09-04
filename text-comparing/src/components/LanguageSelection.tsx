import { PlusCircle } from "lucide-react";
import "./LanguageSelection.css";

export default function LanguageSelection() {
  return (
    <div className="language-selection">
      <select>
        <option value="ქართული">ქართული</option>
        <option value="English">English</option>
      </select>

      <label className="checkbox">
        <input type="checkbox" />
        ფორმატის შენარჩუნება
      </label>

      <button className="add-btn">
        <PlusCircle size={25} />
        ახლის გახსნა
      </button>
    </div>
  );
}
