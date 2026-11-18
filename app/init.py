from flask import Flask # importing the Flask class from the flask library

def createApp():
    app = Flask(__name__) # creating an object from the Flask class, file will be imported as a module which makes __name__ = name of file

    from app.auth.auth import authBP

    app.register_blueprint(authBP, url_prefix="/auth")

    return app