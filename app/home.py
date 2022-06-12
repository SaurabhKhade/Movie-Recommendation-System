from email import message
from flask_restful import Resource
import json

with open('./app/data/frontend_data.json') as f:
    frontend_data = json.load(f)


class Home(Resource):
    def get(self):
        return {
            "/data": {
                "what": "Get list of top actors, directors and genres availale in database"
            },
            "/search": {
                "what": "Search for Movies",
                "params": {
                    "type": "title or description",
                    "data": "text to search"
                }},
            "/recommend": {
                "what": "Get movie recommendations",
                "params": {
                    "ID": "TMDB ID of movie (integer)"
                }}
        }
