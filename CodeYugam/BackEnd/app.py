from flask import Flask,request,jsonify
import mysql.connector
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5000"}}) 
conn=mysql.connector.connect(host="localhost",user="root",password="jiya",database="codeyugam")

cursor=conn.cursor()

@app.route('/', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Query the database for the user
    query = "SELECT * FROM users WHERE username = %s"
    cursor.execute(query, (username,))
    user = cursor.fetchone()

    if user and check_password_hash(user[1], password):  # Assuming password is hashed in the database
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True,port=5000)
