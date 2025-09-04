import { PlusCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./LanguageSelection.css";

export default function LanguageSelection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ქართული");

  const languages = [
    { value: "ქართული", label: "ქართული" },
    { value: "ქართული", label: "ქართული" },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selection">
      <div className="custom-dropdown">
        <button
          className="dropdown-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {selectedLanguage}
          <ChevronDown
            size={20}
            className={`dropdown-arrow ${isOpen ? "open" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            {languages.map((language) => (
              <label key={language.value} className="dropdown-option">
                <input
                  type="radio"
                  name="language"
                  value={language.value}
                  checked={selectedLanguage === language.value}
                  onChange={() => handleLanguageSelect(language.value)}
                />
                <span className="radio-custom"></span>
                {language.label}
              </label>
            ))}
          </div>
        )}
      </div>

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
