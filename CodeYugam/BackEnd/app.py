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
    data = request.json
    userid = data.get('username')
    password = data.get('password')
    session['userid']=userid
    session['password']=password
    print(userid)

    # Query the database for the user
    query = "SELECT * FROM user WHERE userid = %s"
    cursor.execute(query, (userid,))
    user = cursor.fetchone()

    if user and user[1] == password:  # Assuming password is hashed in the database
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
    
    
@app.route('/Profile', methods=['GET'])
@cross_origin(support_credentials=True)
def get_bills():
    if 'userid' not in session:
        return jsonify({'message': 'User not logged in'}), 401

    userid = session['userid']
    query = "SELECT * FROM bill WHERE admno = %s"
    cursor.execute(query, (userid,))
    bills = cursor.fetchall()
    print(bills)
    print("hello")

    # Convert bills to a list of dictionaries
    bill_list = []
    for bill in bills:
        bill_dict = {
            'admno': bill[0],
            'lhid': bill[1],
            'name': bill[2],
            'fee':bill[3],
            'due':bill[4],
            'fine':bill[5],
            'month':bill[6],
            'status':bill[7]
            # Add other fields as needed
        }
        bill_list.append(bill_dict)
    print(bill_list)
    return jsonify(bill_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True,port=5000)
