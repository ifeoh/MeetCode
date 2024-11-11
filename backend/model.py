import os
import re
import string
import sys
import time

sys.path.append(os.path.join(os.path.abspath("."), "code"))

#from plotting_functions_unsup import *

import IPython
import numpy as np
import numpy.random as npr
import pandas as pd
import nltk
import spacy
import gensim
import gensim.downloader as api


#from comat import CooccurrenceMatrix
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
#from sklearn.preprocessing import MyPreprocessor
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
from IPython.display import display

DATA_DIR = os.path.relpath("./data/")

nltk.download('stopwords', download_dir=DATA_DIR)

#print(list(api.info()["models"].keys()))

# Cosine Similarity toy func
#cosine_similarity = np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))
#print(f"Cosine Similarity: {cosine_similarity:.4f}")

google_news_vectors = api.load('word2vec-google-news-300')
#print("Size of vocabulary: ", len(google_news_vectors))

nlp = spacy.load("en_core_web_sm")

#doc = nlp("pineapple") # extract all interesting information about the document
#print(doc.vector[:10])

#analogy("Gauss", "mathematician", "Bob_Dylan")

#compare = google_news_vectors.most_similar(positive=["Gauss", "mathematician"], negative=["Bob_Dylan"])


def compare_with_df(model, sim1, sim2, dissim):

    comparison = model.most_similar(positive=[sim1, sim2], negative=[dissim])
    compare_df = pd.DataFrame(comparison, columns=["Analogy word", "Score"])

    display(compare_df)

    return compare_df

#compare(google_news_vectors, "career", "resume", "politics")
#compare(nlp, "Gauss", "mathematician", "pizza")


def compare_embeddings(presented_text, user_text):

    pres_tokenized =  sent_tokenize(presented_text)
    user_tokenized =  sent_tokenize(user_text)

    embeddings_presented = get_embeddings(pres_tokenized)
    embeddings_user = get_embeddings(user_tokenized)

    similarity = make_cosine_similarity(embeddings_user, embeddings_presented)

    return similarity_score


def make_cosine_similarity(embeddings_user, embeddings_presented):
    similarity = np.dot(embeddings_user, embeddings_presented) / (np.linalg.norm(embeddings_user) * np.linalg.norm(embeddings_presented))
    return similarity

def sim_test(text1, text2):

    #print(sent_tokenized)
    print("\n\nWord2Vec Similarity: ", text1, " and ", text2)
    print(make_cosine_similarity(google_news_vectors[text1], google_news_vectors[text2]))
    
    s1 = nlp(text1)
    s2 = nlp(text2)

    nlp_score = s1.similarity(s2)
    #print("nlp Similarity: ", text1, " and ", text2)
    print("\nnlp similarity: ", nlp_score)

sim_test("UBC", "CBC")
sim_test("UBC", "SFU")
sim_test("UBC", "cannibalism")
print("\n")
sim_test("Hacking", "stress")

