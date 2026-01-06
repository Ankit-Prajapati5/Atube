import "./App.css";

function App() {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <h2>My Simple React App</h2>

      <button onClick={() => openUrl("https://google.com")}>
        Open Google
      </button>

      <button onClick={() => openUrl("https://youtube.com")}>
        Open YouTube
      </button>

      <button onClick={() => openUrl("https://github.com")}>
        Open GitHub
      </button>
    </div>
  );
}

export default App;
