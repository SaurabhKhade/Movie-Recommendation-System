from flask_restful import Resource
import json

with open('./app/data/frontend_data.json') as f:
    frontend_data = json.load(f)


class Data(Resource):
    def get(self):
        return frontend_data
