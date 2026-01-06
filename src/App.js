import "./App.css";

function App() {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <h2>My Simple React App</h2>

      <button onClick={() => openUrl("https://vidssave.com/facebook")}>
        FaceBook Video Download
      </button>

      <button onClick={() => openUrl("https://vidssave.com/yt")}>
        YouTube Video Download
      </button>

      <button onClick={() => openUrl("https://vidssave.com/ins")}>
        Insta Video Download
      </button>
    </div>
  );
}

export default App;
