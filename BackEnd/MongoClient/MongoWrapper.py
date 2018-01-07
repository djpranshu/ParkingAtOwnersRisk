from pymongo import MongoClient
import json
from pymongo.errors import DuplicateKeyError
from ErrorCodes import codes
class MongoDatabase:

    def __init__(self, host, port):
        client = MongoClient(host = host, port = port)
        self.db = client.parkingDB

    def login(self, data):
        userdb = self.db.users
        #if 'email' in data and 'password' in data:

        return None

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