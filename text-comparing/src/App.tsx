import { useState } from "react";
import "./App.css";
import FirstPartDropdown from "./components/FirstPartDropdown";
import LanguageSelection from "./components/LanguageSelection";
import NavBar from "./components/NavBar";
import InputBoxes from "./components/InputBoxes";
import SideMenu from "./components/SideMenu";

function App() {
  const [hasCompared, setHasCompared] = useState(false);

  const handleComparisonDone = () => {
    setHasCompared(true);
  };

  const handleReset = () => {
    setHasCompared(false);
  };

  return (
    <div className="app-container">
      <SideMenu />
      <div className="main-content">
        <NavBar />
        <FirstPartDropdown />
        <LanguageSelection 
          hasCompared={hasCompared}
          onReset={handleReset}
        />
        <InputBoxes 
          onComparisonDone={handleComparisonDone}
        />
      </div>
    </div>
  );
}

export default App;
