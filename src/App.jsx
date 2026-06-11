// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthCallback from "./AuthCallback";

const CLIENT_ID = "YOUR_BUNGIE_CLIENT_ID"; // replace with your actual client ID
const REDIRECT_URI = "http://localhost:5173/auth/callback"; // must match Bungie app

function App() {
  const loginWithBungie = () => {
    const oauthUrl = `https://www.bungie.net/en/OAuth/Authorize?client_id=${CLIENT_ID}&response_type=code&state=destiny-armor&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}`;

    window.location.href = oauthUrl; // redirect browser to Bungie
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
              <h1>Destiny 2 Armor Viewer</h1>
              <p>Login to view your armor inventory.</p>
              <button onClick={loginWithBungie}>Login with Bungie</button>
            </div>
          }
        />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;