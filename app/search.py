from flask import request
from flask_restful import Resource
from marshmallow import Schema, fields, validate, ValidationError
from app.data.recommender import title_search, desc_search


class SearchSchema(Schema):
    type = fields.String(
        required=True, validate=validate.OneOf(["title", "description"]))
    data = fields.String(required=True)


class Search(Resource):
    def get(self):
        try:
            params = SearchSchema().load(request.args)

            if params['type'] == 'title':
                return title_search(params['data'])
            else:
                return desc_search(params['data'])

        except ValidationError as err:
            # print(err.messages)
            return {'Message': 'Bad Request',
                    "reason": err.messages,
                    'request format': {
                        'type': 'title or description',
                        'data': 'text to search'
                    }}

        except Exception as e:
            # print(e)
            return {'Message': 'Something went wrong! Please try again after some time'}
