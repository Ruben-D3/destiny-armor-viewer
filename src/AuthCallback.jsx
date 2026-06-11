import React, { useEffect } from "react";

function AuthCallback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      alert("No code found in URL");
      return;
    }

    fetch("http://127.0.0.1:8000/auth/exchange", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 Bungie Token Response:", data);

        alert("Login successful! Check console for token data.");
      })
      .catch((err) => {
        console.error(err);
        alert("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Logging in...</h1>
      <p>Connecting to Bungie...</p>
    </div>
  );
}

export default AuthCallback;