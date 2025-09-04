import "./App.css";
import FirstPartDropdown from "./components/FirstPartDropdown";
import LanguageSelection from "./components/LanguageSelection";
import NavBar from "./components/NavBar";
import InputBoxes from "./components/InputBoxes";

function App() {
  return (
    <>
      <NavBar />
      <FirstPartDropdown />
      <LanguageSelection />
      <InputBoxes />
    </>
  );
}

export default App;
