// src/App.jsx
import React from "react";

const BUNGIE_CLIENT_ID = 52730;
const REDIRECT_URI =
  "https://destiny-armor-viewer.vercel.app/auth/callback";

function App() {
  const loginWithBungie = () => {
    const authUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${BUNGIE_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}`;

    // Open in the same tab (works on Vercel)
    window.location.assign(authUrl);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Destiny 2 Armor Viewer</h1>
      <p>Login with your Bungie account to view armor inventory.</p>
      <button
        onClick={loginWithBungie}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Login with Bungie
      </button>
    </div>
  );
}

export default App;