from pymongo import MongoClient
import json
from pymongo.errors import DuplicateKeyError
from BackEnd.ErrorCodes import codes
from bson.json_util import dumps
class MongoDatabase:

    def __init__(self, host, port):
        client = MongoClient(host = host, port = port)
        self.db = client.parkingDB

    def login(self, data):
        userdb = self.db.users
        logindb = self.db.login
        if 'username' in data and 'password' in data:
            record = dumps(userdb.find_one({"username":data["username"], "password":data["password"]}))
            record = json.loads(record)
            if record is None:
                return codes.invalidUserOrPassword()
            else:
                logindb.insert_one({"username":record["username"]})
                return json.dumps({"status":"success", "message":{"username":record["username"]}})
        else:
            codes.badRequest()


    def register(self, data):
        userdb = self.db.users
        if 'fname' in data and 'lname' in data and 'username' in data and 'password' in data and 'email' in data and 'phone' in data:
            try:
                userdb.insert_one({"username":data['username'], 'password': data['password'], 'fname':data['fname'], 'lname':data['lname'], 'email':data['email'], 'phone':data['phone']})
                return json.dumps({"status":"success", "message":{"email":data['email'], 'username':data['username']}})
            except DuplicateKeyError:
                return codes.userExists()
        else:
            codes.badRequest()