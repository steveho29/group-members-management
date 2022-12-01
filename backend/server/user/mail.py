import smtplib
from email.message import EmailMessage
import codecs
from typing import *
from datetime import datetime
import logging
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'bestauctionworldwide@gmail.com'
EMAIL_HOST_PASSWORD = 'whtoztuovwxoxpgl'
EMAIL_PORT = 465

HTMLFile = codecs.open("user/mail_template.html", 'r', "utf-8").read()
HTMLFileInvite = codecs.open("user/mail_template_invite.html", 'r', "utf-8").read()

def send_verify_email (user, link):
    content = f"Thanks {user.last_name} {user.first_name} for starting the new account creation process. We want to make sure it's really you. Please enter the following verification code when prompted. If you don’t want to create an account, you can ignore this message."
    title = 'Email Verification'
    logging.getLogger().error(content)
    index = HTMLFile.format(title=title,link=link,content=content)
    
    with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as smtp:
        smtp.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) 
        for email in set([user.email]):
            msg = EmailMessage()
            msg['Subject'] = "Verify Email Account | Minh Duc - HCMUS" 
            msg['From'] = EMAIL_HOST_USER 
            msg['To'] = email
            msg.set_content(index,subtype='html')
            smtp.send_message(msg)
        

def send_invite_email (email, link, groupName):
    content = f"We want to invite you to our group {groupName}. Please enter the following verification code when prompted. If you don’t want to, you can ignore this message."
    title = 'Group Invitation'
    logging.getLogger().error(content)
    index = HTMLFileInvite.format(title=title,link=link,content=content)
    
    with smtplib.SMTP_SSL(EMAIL_HOST, EMAIL_PORT) as smtp:
        smtp.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD) 
        for email in set([email]):
            msg = EmailMessage()
            msg['Subject'] = "Group Invitation | Minh Duc - HCMUS" 
            msg['From'] = EMAIL_HOST_USER 
            msg['To'] = email
            msg.set_content(index,subtype='html')
            smtp.send_message(msg)
        
