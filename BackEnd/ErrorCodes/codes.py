import json

def invalidRequestMethod():
    return json.dumps({"status":"error", "message": {"code":"405", "error":"Method Not Allowed"}})

def userExists():
    return json.dumps({"status":"error", "message":{"code":"801", "error":"User already Exists"}})

def badRequest():
    return json.dumps({"status":"error", "message":{"code":"802", "error":"Invalid request"}})

def invalidUserOrPassword():
    return json.dumps({"status":"error", "message":{"code":"803", "error":"Invalid username"}})