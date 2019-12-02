from flask import Blueprint
from flask_restful import Api

from . import resources

bp = Blueprint("users", __name__)
api = Api(bp)

api.add_resource(resources.Users, "/users")
api.add_resource(resources.UsersId, "/users/<user_id>")
