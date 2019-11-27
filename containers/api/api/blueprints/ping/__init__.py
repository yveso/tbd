from flask import Blueprint, jsonify

bp = Blueprint("ping", __name__, url_prefix="/ping")


@bp.route("/")
def index():
    resp = {"message": "pong"}
    return jsonify(resp)