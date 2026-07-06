import { useState } from "react";

function Counter({ setShowSettings }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button
        className="settings-btn"
        onClick={() => setShowSettings(true)}
      >
        ⚙
      </button>

      <button
        className="btn left"
        onClick={decrease}
      >
        −
      </button>

      <h1 className="count">
        {count}
      </h1>

      <button
        className="btn right"
        onClick={increase}
      >
        +
      </button>
    </>
  );
}

export default Counter;