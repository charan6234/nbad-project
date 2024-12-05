from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("  ")
db = client.charan_nbad

# User model
def create_user(username, password):
    """Create a new user with plaintext password."""
    db.users.insert_one({"username": username, "password": password})

def find_user(username):
    """Find a user by username."""
    return db.users.find_one({"username": username})
