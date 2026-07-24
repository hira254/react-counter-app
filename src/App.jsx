import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import "./App.css";

function App() {

  const [bgColor, setBgColor] = useState(() => {
    return localStorage.getItem("appBgColor") || "#00bcd4";
  });

  const [showSettings, setShowSettings] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);


  const handleColorChange = (newColor) => {
    setBgColor(newColor);
    localStorage.setItem("appBgColor", newColor);
  };

  return (
    <>
      {showSplash ? (
     
        <div className="welcome" style={{ backgroundColor: bgColor }}>
          <div className="splash-content">
            <h1>Simple Counter</h1>
            <p>
              A simple tool for counting things like shopping, workouts,
              attendance and more.
            </p>
          </div>
        </div>
      ) : (

        <div className="app" style={{ backgroundColor: bgColor }}>
          <Counter setShowSettings={setShowSettings} bgColor={bgColor} />

          {showSettings && (
            <Settings
              setBgColor={handleColorChange}
              setShowSettings={setShowSettings}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;