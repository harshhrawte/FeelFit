from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # This will now load index.html

@app.route('/chatbot')
def chatbot():
    return render_template('chatbot.html')  # Chatbot page

if __name__ == '__main__':
    app.run(debug=True)
