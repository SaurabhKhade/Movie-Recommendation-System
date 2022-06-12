from flask_restful import Resource, reqparse
from flask_restful import reqparse
from app.data.recommender import recommend

parser = reqparse.RequestParser(bundle_errors=True)
parser.add_argument(
  'id',
  required=True,
  help='ID not provided',
  type=int
)


class Recommend(Resource):
  def get(self):
    try:
      args = parser.parse_args()
      id = args['id']
      return recommend(id)
    except Exception as e:
      print(e)
      return {'Message': 'Bad Request', 'request format': {
        'id': 'TMDB ID of movie (integer)',
      }}
