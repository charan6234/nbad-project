import os
from datetime import timedelta
from pymongo import MongoClient
from flask import Flask

class Config:
    SECRET_KEY = "Charan_tej"  # Replace with a strong secret
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    MONGO_URI = "mongodb+srv://charan:charan@charan.kr9bx.mongodb.net/?retryWrites=true&w=majority&appName=charan"
    # MONGO_URI = "mongodb://charan:charan@charan.kr9bx.mongodb.net/charan_nbad?authMechanism=SCRAM-SHA-1&retryWrites=true&w=majority"
    # MONGO_URI = "mongodb://localhost:27017"
    MONGO_CLIENT = MongoClient(MONGO_URI)