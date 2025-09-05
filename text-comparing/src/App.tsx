import "./App.css";
import FirstPartDropdown from "./components/FirstPartDropdown";
import LanguageSelection from "./components/LanguageSelection";
import NavBar from "./components/NavBar";
import InputBoxes from "./components/InputBoxes";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <div className="main-content">
        <NavBar />
        <FirstPartDropdown />
        <LanguageSelection />
        <InputBoxes />
      </div>
    </div>
  );
}

export default App;
