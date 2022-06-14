from flask import Flask, render_template
from flask_restful import Api
from app.home import Home
from app.search import Search
from app.recommend import Recommend
from app.data_bundle import Data
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='frontend')
app.config['JSON_SORT_KEYS'] = False
CORS(app)
api = Api(app)

api.add_resource(Search, '/search')
api.add_resource(Recommend, '/recommend')
api.add_resource(Data, '/data')


@app.route('/')
def home():
    return app.send_static_file('index.html')


@app.route('/movie')
def movie():
    return app.send_static_file('movie.html')


@app.errorhandler(404)
def handle_404(error):
    return app.send_static_file('404.html')


if __name__ == '__main__':
    app.run(debug=True)
