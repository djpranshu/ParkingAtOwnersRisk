from pymongo import MongoClient
import json
from pymongo.errors import DuplicateKeyError
from BackEnd.ErrorCodes import codes
from passlib.hash import pbkdf2_sha256

class MongoDatabase:

    def __init__(self, host, port):
        client = MongoClient(host = host, port = port)
        self.db = client.parkingDB

    def login(self, data):
        print(type(data))
        userdb = self.db.users
        logindb = self.db.login
        if 'username' in data and 'password' in data:
            record = json.dumps(userdb.find_one({"username":data["username"]},{"_id":0}))
            record = json.loads(record)
            if record is None:
                return codes.invalidUserOrPassword()
            else:
                isTrue = pbkdf2_sha256.verify(data['password'], record['password'])
                if isTrue is True:
                    logindb.insert_one({"username": record["username"]})
                    return json.dumps({"status": "success", "message": {"username": record["username"]}})
                else:
                    return codes.invalidUserOrPassword()
        else:
            codes.badRequest()


    def register(self, data):
        userdb = self.db.users
        if 'fname' in data and 'lname' in data and 'username' in data and 'password' in data and 'email' in data and 'phone' in data:
            try:
                hash1 = pbkdf2_sha256.encrypt(data['password'])
                userdb.insert_one({"username":data['username'], 'password': hash1, 'fname':data['fname'], 'lname':data['lname'], 'email':data['email'], 'phone':data['phone']})
                return json.dumps({"status":"success", "message":{"email":data['email'], 'username':data['username']}})
            except DuplicateKeyError:
                return codes.userExists()
        else:
            codes.badRequest()