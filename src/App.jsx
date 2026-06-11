// src/App.jsx
import React from "react";

const BUNGIE_CLIENT_ID = 52730;

const REDIRECT_URI =
  "https://destiny-armor-viewer.vercel.app/auth/callback";

function App() {
  const loginWithBungie = () => {
    console.log("Login button clicked");

    const authUrl =
      "https://www.bungie.net/en/OAuth/Authorize" +
      "?client_id=" +
      BUNGIE_CLIENT_ID +
      "&response_type=code" +
      "&redirect_uri=" +
      encodeURIComponent(REDIRECT_URI);

    console.log("Redirect URL:", authUrl);

    window.location.assign(authUrl);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Destiny 2 Armor Viewer</h1>

      <p>Login with Bungie to view your armor inventory.</p>

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