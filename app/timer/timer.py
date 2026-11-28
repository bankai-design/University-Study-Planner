from flask import Blueprint, render_template, request, redirect, url_for, flash

timerBP = Blueprint("timerBP", __name__, template_folder="templates", static_folder="static")

@timerBP.route("/pomodorio")
def pomodorio():
    return render_template("timer.html")