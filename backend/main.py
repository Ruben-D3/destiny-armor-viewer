from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://destiny-armor-viewer.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

BUNGIE_CLIENT_ID = 52730
BUNGIE_CLIENT_SECRET = "YUlUBMUSrs-7D3sOHD0rqe4Hx-8cW0QRSEDgeraCj98"

TOKEN_URL = "https://www.bungie.net/platform/app/oauth/token/"

@app.get("/")
def home():
    return {"status": "ok"}

@app.get("/auth/token")
def exchange_token(code: str):
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "client_id": BUNGIE_CLIENT_ID,
        "client_secret": BUNGIE_CLIENT_SECRET,
    }

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    response = requests.post(TOKEN_URL, data=data, headers=headers)

    return response.json()