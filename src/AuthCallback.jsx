// src/AuthCallback.jsx
import React, { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      alert("No authorization code received from Bungie.");
      return;
    }

    console.log("Bungie auth code:", code);

    // CALL YOUR VERCEL BACKEND (IMPORTANT)
    fetch(
      `https://destiny-armor-viewer-backend.vercel.app/auth/token?code=${code}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("ACCESS TOKEN RESPONSE:", data);
        alert("Login successful! Check console for token.");
      })
      .catch((err) => {
        console.error("Token exchange failed:", err);
        alert("Failed to get access token from backend.");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Signing you in with Bungie...</h2>
      <p>Please wait while we retrieve your account.</p>
    </div>
  );
}

export default AuthCallback;