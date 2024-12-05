from flask import Blueprint, request, jsonify, Flask
from flask_jwt_extended import create_access_token, JWTManager
import jwt
import datetime
from models.user_model import create_user, find_user

auth_routes = Blueprint("auth", __name__)
SECRET_KEY="Charan_tej"
@auth_routes.route("/login", methods=["POST"])
# def login():
#     """Authenticate user and return JWT."""
#     data = request.json
#     user = find_user(data["username"])
#     print("fetched user",user)
#     if user and user["password"] == data["password"]:
#         token = jwt.encode(
#             {
#                 "username": username, 
#                 "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Token expiration time
#             },
#             SECRET_KEY,
#             algorithm="HS256"
#         )
#         return jsonify({"token": token}), 200
#     else:
#         return jsonify({"message": "Invalid credentials"}), 401

def login():
    # Parse JSON payload
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    print("username entered:",username,"password entered:",password)
    
    # Validate credentials
    if username == 'charan' and password == 'charan':
        # Generate JWT token
        token = jwt.encode(
            {
                "username": username, 
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Token expiration time
            },
            SECRET_KEY,
            algorithm="HS256"
        )
        return jsonify({"token": token}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

# @auth_routes.route("/login", methods=["POST"])
# def login():
#     """Authenticate user and return encrypted JWT."""
#     hardcoded_username = "charan"
#     hardcoded_password = "charan"
    
#     data = request.json
#     if data["username"] == hardcoded_username and data["password"] == hardcoded_password:
#         # Generate JWT token
#         token = create_access_token(identity=data["username"])
        
#         # Encrypt the token
#         encrypted_token = cipher.encrypt(token.encode())
        
#         return jsonify({"access_token": encrypted_token.decode()}), 200
    
#     return jsonify({"message": "Invalid credentials"}), 401

@auth_routes.route("/register", methods=["POST"])
def register():
    """Register a new user."""
    data = request.json
    create_user(data["username"], data["password"])
    return jsonify({"message": "User registered successfully"}), 201
