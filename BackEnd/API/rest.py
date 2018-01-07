from flask import Flask, request
from MongoClient import MongoWrapper
from ErrorCodes import codes

db = MongoWrapper.MongoDatabase(host = 'localhost', port=27017)
app = Flask(__name__)

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        return db.login(request.get_json())
    else:
        return codes.invalidRequestMethod()


@app.route('/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        return db.register(request.get_json())
    else:
        return codes.invalidRequestMethod()

if __name__ == '__main__':
    app.run(host = 'localhost', port = 8000)