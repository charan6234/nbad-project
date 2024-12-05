from flask import Blueprint, jsonify, current_app, request
from flask_jwt_extended import jwt_required
from config import Config
import logging

chart_routes = Blueprint("charts", __name__)
logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)

@chart_routes.route("/research_areas", methods=["GET"])
# @jwt_required()
def get_research_areas():
    """
    Fetch all research areas and their project counts.
    """
    try:
        # Access MongoDB client and database from Flask's app config
        db = current_app.config["MONGO_CLIENT"].get_database("charan_nbad")

        # Retrieve data from the research_areas collection
        research_areas = list(db.research_areas.find({}, {"_id": 0}))  # Exclude the _id field

        return jsonify({"status": "success", "data": research_areas}), 200
    except Exception as e:
        logger.error(f"Error fetching research areas: {e}", exc_info=True)
        return jsonify({"status": "error", "message": str(e)}), 500

@chart_routes.route("/charts/reports", methods=["GET"])
@jwt_required()
def get_reports_chart_data():
    # Replace with actual chart data
    return jsonify({
        "labels": ["2018", "2019", "2020"],
        "data": [50, 60, 70]
    }), 200
@chart_routes.route("/funding_trends", methods=["GET"])
# @jwt_required()
def get_funding_trends():
    """
    Fetch funding trends for research areas over the years.
    This route is protected with JWT authentication.
    """
    try:
        # Access the database from the Flask config
        db = current_app.config["MONGO_CLIENT"].get_database("charan_nbad")
        
        # Retrieve data from the funding_trends collection
        funding_trends = list(db.funding_trends.find({}, {"_id": 0}))  # Exclude the _id field
        
        return jsonify({"status": "success", "data": funding_trends}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500