import requests
from requests import Response, post
from typing import List
import os


class MailgunException(Exception):
    def __init__(self, message: str):
        super().__init__(message)


class Mailgun:
    MAILGUN_DOMAIN = os.environ.get("MAILGUN_DOMAIN")
    MAILGUN_API_KEY = os.environ.get("MAILGUN_API_KEY")

    FROM_TITLE = "!!! ALERT !!!"
    FROM_EMAIL = os.environ.get("FROM_EMAIL")

    @classmethod
    def send_email(cls, email: List[str], subject: str, message: str, contact: str) -> Response:
        if cls.MAILGUN_API_KEY is None:
            raise MailgunException("Failed to load MailGun API key.")
        if cls.MAILGUN_DOMAIN is None:
            raise MailgunException("Failed to load MailGun domain.")
        response = requests.post(
            f"https://api.mailgun.net/v3/{cls.MAILGUN_DOMAIN}/messages",
            auth=("api", cls.MAILGUN_API_KEY),
            data={
                "from": f"{cls.FROM_TITLE} <{cls.FROM_EMAIL}> ",
                "to": [email],
                "subject": subject,
                "text": message,
                "html": contact
            },
        )
        if response.status_code != 200:
            raise MailgunException("Error in sending confirmation email, user registration failed.")
        return response
