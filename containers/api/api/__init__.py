import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()


def create_app():
    app = Flask(__name__)
    app_settings = os.getenv("APP_SETTINGS")
    app.config.from_object(app_settings)

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)

    from api import models

    from api.blueprints.ping import bp as ping_bp
    from api.blueprints.users import bp as users_bp

    app.register_blueprint(ping_bp)
    app.register_blueprint(users_bp)

    @app.shell_context_processor
    def ctx():
        return {"app": app, "db": db}

    @app.cli.command()
    def recreate_db():
        pass
        db.drop_all()
        db.create_all()
        db.session.commit()

    @app.cli.command()
    def seed_db():
        db.session.add(
            models.User(
                username="Test", email="test@test.com", password="abc123"
            )
        )
        db.session.add(
            models.User(
                username="Foo Bar", email="foo@bar.com", password="123abc"
            )
        )
        db.session.commit()

    return app
