from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BUNGIE_TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/"

CLIENT_ID = "YOUR_BUNGIE_CLIENT_ID"
CLIENT_SECRET = "YOUR_BUNGIE_CLIENT_SECRET"

@app.get("/")
def home():
    return {"status": "backend running"}

@app.post("/auth/exchange")
def exchange_code(payload: dict):
    code = payload.get("code")

    if not code:
        return {"error": "missing code"}

    data = {
        "grant_type": "authorization_code",
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
    }

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    response = requests.post(BUNGIE_TOKEN_URL, data=data, headers=headers)

    return response.json()