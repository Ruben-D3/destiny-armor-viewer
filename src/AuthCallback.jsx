// src/AuthCallback.jsx
import React, { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    // Read the code Bungie sent
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Bungie authorization code:", code);

      // TODO: send this code to your backend to exchange for access token
      // For now, we just show it in alert
      alert("Authorization code received! Check console for details.");
    } else {
      alert("No code received. Check Bungie login.");
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Processing Bungie login...</h2>
      <p>Please wait a moment.</p>
    </div>
  );
}

export default AuthCallback;