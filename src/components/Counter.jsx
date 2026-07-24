import { useState } from "react";
import { FaInfoCircle, FaCog, FaRedo, FaTimes } from "react-icons/fa";

function Counter({ setShowSettings, bgColor }) {
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <>

      <div className="header-actions">
        <button
          className="header-btn"
          onClick={() => setShowInfo(true)}
          title="Info"
        >
          <FaInfoCircle />
        </button>

        <button
          className="header-btn"
          onClick={() => setShowSettings(true)}
          title="Settings"
        >
          <FaCog />
        </button>

        <button className="header-btn" onClick={reset} title="Reset">
          <FaRedo />
        </button>
      </div>

    
      <button className="btn left" onClick={decrease}>
        −
      </button>

      <h1 className="count">{count}</h1>

      <button className="btn right" onClick={increase}>
        +
      </button>


      {showInfo && (
        <div className="info-modal" style={{ backgroundColor: bgColor }}>
          <button
            className="info-close-btn"
            onClick={() => setShowInfo(false)}
          >
            <FaTimes />
          </button>

          <div className="info-content">
            <h1>Simple Counter</h1>

            <p className="info-desc">
              A simple tool for counting things and keeping track of numbers.{" "}
            </p>

           

            <p className="creator">
              By <span className="creator-name">Hira Zahoor Ahmed</span> 😊
            </p>

          </div>
        </div>
      )}
    </>
  );
}

export default Counter;