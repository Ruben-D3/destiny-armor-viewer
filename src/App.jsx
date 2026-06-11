// src/App.jsx
import React from "react";

function App() {
  const CLIENT_ID = "52730"; // <-- replace this

  // MUST match exactly what is set in Bungie Developer Portal
  const REDIRECT_URI =
    "https://destiny-armor-viewer.vercel.app/auth/callback";

  const loginWithBungie = () => {
    const authUrl =
      "https://www.bungie.net/en/OAuth/Authorize" +
      "?client_id=" +
      CLIENT_ID +
      "&response_type=code" +
      "&redirect_uri=" +
      encodeURIComponent(REDIRECT_URI);

    window.location.href = authUrl;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Destiny 2 Armor Viewer</h1>

      <p>Login to view your armor inventory.</p>

      <button
        onClick={loginWithBungie}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Login with Bungie
      </button>
    </div>
  );
}

export default App;