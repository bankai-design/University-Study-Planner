from flask import Blueprint, render_template

authBP = Blueprint("authBP", __name__, template_folder="templates", static_folder="static")

@authBP.route("/register")
def registerPage():
    return render_template("register.html")

@authBP.route("/login")
def loginPage():
    return render_template("login.html")
