from flask import Blueprint, render_template, request, redirect, url_for, flash

dashBP = Blueprint("dashBP", __name__, template_folder="templates", static_folder="static")

@dashBP.route("/dashboard")
def dashboardPage():
    return render_template("dash.html")