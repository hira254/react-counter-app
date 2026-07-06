import { useState } from "react";
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div
      className="app"
      style={{ backgroundColor: bgColor }}
    >
      <Counter
        setShowSettings={setShowSettings}
      />

      {showSettings && (
        <Settings
          setBgColor={setBgColor}
          setShowSettings={setShowSettings}
        />
      )}
    </div>
  );
}

export default App;