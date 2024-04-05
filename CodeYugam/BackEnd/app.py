from flask import Flask,request,jsonify,session
import mysql.connector
from flask_cors import CORS,cross_origin
from werkzeug.security import check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY']='CodeYugam'
# CORS(app, resources={r"/api/*": {"origins": "*"}}) 
CORS(app,supports_credentials=True) 

conn=mysql.connector.connect(host="localhost",user="root",password="jiya",database="codeyugam")

cursor=conn.cursor()

@app.route('/', methods=['POST'])
@cross_origin(support_credentials=True)
def login():
    print
    data = request.json
    username = data.get('username')
    password = data.get('password')
    session['username']=username
    session['password']=password

    # Query the database for the user
    query = "SELECT * FROM user WHERE userid = %s"
    cursor.execute(query, (username,))
    user = cursor.fetchone()

    if user and user[1] == password:  # Assuming password is hashed in the database
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True,port=5000)
