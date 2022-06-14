from flask import Flask
from flask_restful import Api
from app.home import Home
from app.search import Search
from app.recommend import Recommend
from app.data_bundle import Data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Home, '/')
api.add_resource(Search, '/search')
api.add_resource(Recommend, '/recommend')
api.add_resource(Data, '/data')

if __name__ == '__main__':
    app.run(debug=True)
