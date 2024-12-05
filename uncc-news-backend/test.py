from pymongo import MongoClient

MONGO_URI = "mongodb+srv://charan:charan@charan.kr9bx.mongodb.net/charan_nbad?retryWrites=true&w=majority"

try:
    client = MongoClient(MONGO_URI)
    db = client.get_database("charan_nbad")
    print("Database connection successful!")
except Exception as e:
    print(f"Database connection failed: {e}")
