// src/AuthCallback.jsx
import React, { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Authorization code:", code);

      fetch(`https://destiny-armor-viewer-backend.vercel.app/auth/token?code=${code}`)
        .then(res => res.json())
        .then(data => {
          console.log("Access token response:", data);
          alert("Access token received! Check console.");
        })
        .catch(err => {
          console.error(err);
          alert("Failed to get access token.");
        });
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