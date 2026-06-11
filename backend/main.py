# backend/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

# Allow your frontend to call the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For now; later restrict to your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BUNGIE_CLIENT_ID = 52730
BUNGIE_CLIENT_SECRET = "YOUR_BUNGIE_CLIENT_SECRET"  # Put your secret here

@app.get("/auth/token")
def get_access_token(code: str):
    """
    Exchange Bungie authorization code for access token
    """
    url = "https://www.bungie.net/Platform/App/OAuth/Token/"
    data = {
        "grant_type": "authorization_code",
        "code": code,
        "client_id": BUNGIE_CLIENT_ID,
        "client_secret": BUNGIE_CLIENT_SECRET,
    }
    response = requests.post(url, data=data)
    return response.json()


@app.get("/hello")
def hello():
    return {"message": "Backend is running"}