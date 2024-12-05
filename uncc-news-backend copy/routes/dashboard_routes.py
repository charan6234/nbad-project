from flask import Blueprint, jsonify

dashboard_routes = Blueprint("dashboard", __name__)

@dashboard_routes.route("/dashboard", methods=["GET"])
def get_dashboard_content():
    # Replace with actual content
    return jsonify({
        "title": "UNCC News",
        "content": "Summary of UNCC's latest news...",
        "source_url": "https://uncc.edu/news"
    }), 200
