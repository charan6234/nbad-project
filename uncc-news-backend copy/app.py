from flask import Flask
from pymongo import MongoClient
from flask_jwt_extended import JWTManager
from config import Config
from routes.auth_routes import auth_routes
from routes.dashboard_routes import dashboard_routes
from routes.chart_routes import chart_routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# app.config.from_object(Config)
MONGO_URI = "mongodb+srv://charan:charan@charan.kr9bx.mongodb.net/?retryWrites=true&w=majority&appName=charan"
# MONGO_URI = "mongodb://localhost:27017"
try:
    client = MongoClient(MONGO_URI)
    client.admin.command('ping')
    app.config["MONGO_CLIENT"] = client
    print("Pinged your deployment. You successfully connected to MongoDB!")
    db = client["charan_nbad"]
    print("Database connection successful!")
except Exception as e:
    print(f"Database connection failed: {e}")
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(auth_routes, url_prefix="/auth")
app.register_blueprint(dashboard_routes, url_prefix="/api")
app.register_blueprint(chart_routes, url_prefix="/chart")

def display_routes():
    print("\nRegistered Routes:")
    for rule in app.url_map.iter_rules():
        methods = ', '.join(rule.methods)
        print(f"{rule.endpoint:20s} {methods:30s} {rule}")

if __name__ == "__main__":
    display_routes()
    app.run(host="0.0.0.0", port=3000, debug=True)
