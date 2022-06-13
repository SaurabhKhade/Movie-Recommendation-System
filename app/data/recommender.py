import pandas as pd
import pickle
from nltk.stem.porter import PorterStemmer
from sklearn.metrics.pairwise import cosine_similarity

stemmer = PorterStemmer()
data = pd.read_csv('./app/data/ids_n_titles.csv')

with open('./app/data/similarities.pickle', 'rb') as f:
    similarities = pickle.load(f)

with open('./app/data/vectorizer.pickle', 'rb') as f:
    vectorizer = pickle.load(f)

with open('./app/data/vectors.pickle', 'rb') as f:
    vectors = pickle.load(f)

with open('./app/data/title_vectorizer.pickle', 'rb') as f:
    title_vectorizer = pickle.load(f)

with open('./app/data/title_vectors.pickle', 'rb') as f:
    title_vectors = pickle.load(f)


def recommend(id):
    try:
        index = data[data['id'] == id].index[0]
    except:
        return {'message': 'ID not found'}
    sim_scores = list(enumerate(similarities[index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:21]
    movie_indices = [i[0] for i in sim_scores]
    dict = data.iloc[movie_indices][['id', 'title']].to_dict()
    movies = {'message': 'Success', "data": {}}
    for key in dict["id"].keys():
        movies['data'][dict["id"][key]] = dict["title"][key]

    movies['message'] = 'Success'

    return movies


def get_movies(vector, vectors, count):
    sim_scores = [cosine_similarity(vector, vectors[i])
                  for i in range(vectors.shape[0])]
    sim_scores = list(enumerate(sim_scores))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[0:count]
    movie_indices = [i[0] for i in sim_scores]
    dict = data.iloc[movie_indices][['id', 'title']].to_dict()
    movies = {'message': 'Success', "data": {}}
    for key in dict["id"].keys():
        movies['data'][dict["id"][key]] = dict["title"][key]

    return movies


def desc_search(desc):
    desc = " ".join([stemmer.stem(word) for word in desc.split()])
    vector = vectorizer.transform([desc])
    return get_movies(vector, vectors, 20)


def title_search(title):
    title = " ".join([stemmer.stem(word) for word in title.split()])
    vector = title_vectorizer.transform([title])
    return get_movies(vector, title_vectors, 20)
