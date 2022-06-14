from flask import request
from flask_restful import Resource
from marshmallow import Schema, fields, ValidationError
from app.data.recommender import recommend


class IDSchema(Schema):
    id = fields.Integer(required=True)


class Recommend(Resource):
    def get(self):
        try:
            params = IDSchema().load(request.args)
            id = params['id']
            return recommend(id)

        except ValidationError as err:
            return {'Message': 'Bad Request',
                    "reason": err.messages,
                    'request format': {
                        'id': 'TMDB ID of movie (integer)',
                    }}

        except Exception:
            return {'Message': 'Something went wrong! Please try again after some time'}
