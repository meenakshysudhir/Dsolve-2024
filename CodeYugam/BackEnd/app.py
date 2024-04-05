from flask import Flask,request,jsonify,session
import mysql.connector
from flask_cors import CORS,cross_origin
from werkzeug.security import check_password_hash
import stripe

app = Flask(__name__)
app.config['SECRET_KEY']='CodeYugam'
stripe.api_key = 'pk_test_51P27A1SDq77ikuyDIUJFUjjqUukntEKwt6oIe2JbWzBlotfZmYJy1qsyT9xdUKvgcOLEsW5vZy5jRYHmU6BASwdn00yqToosy8'
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
    query = "SELECT admno,lhid,name,fee,due,fine,month,status,billid FROM bill WHERE admno = %s"
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
            'fee':bill[3],
            'due':bill[4],
            'fine':bill[5],
            'month':bill[6],
            'status':bill[7],
            'billid':bill[8]
            # Add other fields as needed
        }
        bill_list.append(bill_dict)
    print(bill_list)
    return jsonify(bill_list)

@app.route('/pay', methods=['POST'])
def charge():
    result=request.json
    amount = result.get('amount')  # $10 in cents
    currency = 'inr'
    description = 'Test payment'    
    try:
        charge = stripe.Charge.create(
            amount=amount,
            currency=currency,
            source=amount,
            description=description
        )
        return jsonify({'status': 'success', 'message': 'Payment successful'})
    except stripe.error.CardError as e:
        # Payment failed
        return jsonify({'status': 'error', 'message': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True,port=5000)
