from flask_restful import Resource, reqparse
from flask_restful import reqparse
from app.data.recommender import title_search, desc_search

parser = reqparse.RequestParser()
parser.add_argument(
  'type',
  choices=('title', 'description'),
  required=True,
  help='Incorrect Type: {error_msg}'
)
parser.add_argument(
  'data',
  required=True,
  help="Data cannot be blank!"
)


class Search(Resource):
  def get(self):
    try:
      args = parser.parse_args()

      if args['type'] == 'title':
        return title_search(args['data'])
      else:
        return desc_search(args['data'])
    except Exception as e:
      print(e)
      return {'Message': 'Bad Request', 'request format': {
        'type': 'title or description',
        'data': 'text to search'
      }}
