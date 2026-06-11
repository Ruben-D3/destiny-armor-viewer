function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Destiny 2 Armor Viewer</h1>

      <p>Login to view your armor inventory.</p>

      <button onClick={() => alert("Next step: Bungie login")}>
        Login with Bungie
      </button>
    </div>
  );
}

export default App;