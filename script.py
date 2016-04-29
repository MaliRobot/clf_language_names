# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from flask import Flask, request
import json

app = Flask(__name__)

@app.route("/")
def get_lang():
    clf_lang = other_lang = all_clf = all_other = None
    print(request.args)
    if 'clf_lang' in request.args:
        clf_lang = request.args['clf_lang']
    elif 'other_lang' in request.args:
        other_lang = request.args['other_lang']
    elif 'all_clf' in request.args:
        all_clf = request.args['all_clf']
    elif 'all_other' in request.args:
        all_other = request.args['all_other']
    
    if clf_lang or all_clf:
        f = open('clf.json', 'r', encoding="utf8")
    elif all_clf or all_other:
        f = open('clf_other.json', 'r', encoding="utf8")
    
    json_f = json.load(f)    
    
    if clf_lang or other_lang:
        print(clf_lang)
        if clf_lang in json_f:
            return json_f[clf_lang] 
        elif other_lang in json_f:
            return json_f[other_lang]
    
    if all_clf or all_other:
        return json_f.keys()
    

if __name__ == "__main__":
    app.run()