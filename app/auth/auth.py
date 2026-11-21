from flask import Blueprint, render_template, request, redirect, url_for, flash
from .models import User, db

authBP = Blueprint("authBP", __name__, template_folder="templates", static_folder="static")

@authBP.route("/register", methods=["POST", "GET"])
def registerPage():
    if request.method == "POST":
        fullName = request.form["usersFullName"]
        userEmail = request.form["usersEmail"]
        pass1 = request.form["usersPass1"]
        pass2 = request.form["usersPass2"]

        foundUser = User.query.filter_by(email=userEmail).first()
        if foundUser:
            flash("Email already has an account")
            return redirect(url_for("authBP.loginPage"))
        else:
            if pass1 == pass2:
                account = User(name=fullName, email=userEmail, password=pass1)
                db.session.add(account)
                db.session.commit()

            return redirect(url_for("authBP.loginPage"))
    else:
        return render_template("register.html")

@authBP.route("/login")
def loginPage():
    return render_template("login.html")

@authBP.route("/view")
def view():
    return render_template("view.html", values=User.query.all())
