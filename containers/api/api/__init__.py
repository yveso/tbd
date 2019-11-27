import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app_settings = os.getenv("APP_SETTINGS")
    app.config.from_object(app_settings)

    db.init_app(app)

    from api.blueprints.ping import bp as ping_bp
    app.register_blueprint(ping_bp)

    @app.cli.command()
    def recreate_db():
        db.drop_all()
        db.create_all()
        db.session.commit()

    return app