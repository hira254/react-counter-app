const colors = [
  "#4d6ef5",
  "#000000",
  "#330101",
  "#ff1493",
  "#9c27b0",
  "#00bcd4",
  "#4caf50",
  "#ff9800",
  "#f44336",
  "#795548",
  "#3f51b5",
  "#009688",
];

function Settings({
  setBgColor,
  setShowSettings,
}) {
  return (
    <div className="overlay">
      <div className="settings">

        <button
          className="close-btn"
          onClick={() => setShowSettings(false)}
        >
          ✕
        </button>

        <h2>Choose Background</h2>

        <div className="colors">
          {colors.map((color) => (
            <div
              key={color}
              className="color-box"
              style={{
                backgroundColor: color,
              }}
              onClick={() =>
                setBgColor(color)
              }
            ></div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Settings;