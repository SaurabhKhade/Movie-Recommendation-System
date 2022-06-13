from email.mime import application
from flask import Flask
from flask_restful import Api
from app.home import Home
from app.search import Search
from app.recommend import Recommend
from app.data_bundle import Data
from gevent.pywsgi import WSGIServer
from flask_cors import CORS

application = Flask(__name__)
CORS(application)
api = Api(application)

api.add_resource(Home, '/')
api.add_resource(Search, '/search')
api.add_resource(Recommend, '/recommend')
api.add_resource(Data, '/data')

if __name__ == '__main__':
    # WSGIServer(('', 5000), application).serve_forever()
    application.run(debug=True)
