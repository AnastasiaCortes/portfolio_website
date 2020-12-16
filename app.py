import os

from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, send_file, url_for

from mailgun import Mailgun

app = Flask(__name__)

load_dotenv(".env", verbose=True)
EMAIL = os.environ.get("EMAIL")


@app.route('/')
@app.route('/home')
def my_home():
    return render_template('index.html')


@app.route('/thankyou')
def thank_you():
    return render_template('thanks.html')


@app.route('/resume')
def show_pdf():
    return send_file('static/resume.pdf', attachment_filename='resume.pdf')


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        data = request.form.to_dict()
        send_confirmation_email(data)
        return redirect('/thankyou')
    else:
        return 'something went wrong, try again!'


def send_confirmation_email(data):
    email = EMAIL
    subject = "! PORTFOLIO MESSAGE !"
    message = "message"
    name = data['name']
    contact_email = data['email']
    contact_subject = data['subject']
    contact_message = data['message']
    contact = f'EMAIL: {contact_email} <br> NAME:{name} <br> SUBJECT: {contact_subject}<br> MESSAGE: {contact_message}'
    return Mailgun.send_email(email, subject, message, contact)


if __name__ == "__main__":
    app.run(port=4972, debug=True)
