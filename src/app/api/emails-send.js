from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_email_password'
mail = Mail(app)

@app.route('/', methods = ['GET', 'POST'])
def contact():
if request.method == 'POST':
    name = request.form.get('name')
email = request.form.get('email')
message = request.form.get('message')

if name and email and message:
msg = Message("New Contact Form Submission",
    sender = "your_email@gmail.com",
    recipients = ["your_email@gmail.com"])
msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
mail.send(msg)

return render_template('thankyou.html')
        else:
return render_template('contact.html', error = "Please fill in all fields.")
    else:
return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug = True)