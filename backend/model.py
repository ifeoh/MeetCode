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
from  random import randrange


#from comat import CooccurrenceMatrix
from nltk.corpus import stopwords
from spacy.lang.en.stop_words import STOP_WORDS
from textblob import TextBlob
from spacytextblob.spacytextblob import SpacyTextBlob
from nltk.tokenize import sent_tokenize, word_tokenize
from IPython.display import display


DATA_DIR = os.path.relpath("./data/")

#nltk.download('stopwords', download_dir=DATA_DIR)

#print(list(api.info()["models"].keys()))

# Cosine Similarity toy func
#cosine_similarity = np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))
#print(f"Cosine Similarity: {cosine_similarity:.4f}")

#google_news_vectors = api.load('word2vec-google-news-300')


sw = stopwords.words('english')
nlp = spacy.load("en_core_web_lg")
nlp_sm = spacy.load("en_core_web_sm")



#doc = nlp("pineapple") # extract all interesting information about the document
#print(doc.vector[:10])

#analogy("Gauss", "mathematician", "Bob_Dylan")

#compare = google_news_vectors.most_similar(positive=["Gauss", "mathematician"], negative=["Bob_Dylan"])

pres_txt = "Sorry, I'm late, my personal life is just a mess lately."
user_txt = "Hey! I know you’ll get through it, I’ve always got your back if you need anything."


def compare_with_df(model, sim1, sim2, dissim):

    comparison = model.most_similar(positive=[sim1, sim2], negative=[dissim])
    compare_df = pd.DataFrame(comparison, columns=["Analogy word", "Score"])

    display(compare_df)

    return compare_df




def compare_text(presented_text, user_text):

    pres_tokenized =  sent_tokenize(presented_text)
    user_tokenized =  sent_tokenize(user_text)

    #user_filtered = [for token in user_tokenized and not in STOP_WORDS]

    #filtered = [token for index, token in enumerate(user_tokenized) if index not in STOP_WORDS]
    
    #embeddings_presented = nlp(pres_tokenized)
    #embeddings_user = nlp(user_tokenized)

    #similarity_score = make_cosine_similarity(embeddings_user, embeddings_presented)

    #similarity_score = embeddings_presented.similarity(embeddings_user)

    s1 = nlp(presented_text)
    s2 = nlp(user_text)

    similarity_score = s1.similarity(s2)
    nlp.add_pipe("spacytextblob")

    preprocessed_text = " ".join(user_tokenized)
    blob = TextBlob(user_text)
    polarity = blob.sentiment.polarity


    if polarity >= 0:
        sentiment = randrange(30, 80)
    else:
        sentiment = -1 * randrange(30, 80)

    print(preprocessed_text)

    return similarity_score, sentiment




def make_cosine_similarity(embeddings_user, embeddings_presented):
    similarity = np.dot(embeddings_user, embeddings_presented) / (np.linalg.norm(embeddings_user) * np.linalg.norm(embeddings_presented))
    return similarity



def sim_test(pres_txt, user_txt):

    # Former Word2Vec Approach
    #print(sent_tokenized)
    #print("\n\nWord2Vec Similarity: ", text1, " and ", text2)
    #print(make_cosine_similarity(google_news_vectors[text1], google_news_vectors[text2]))
    
    s1 = nlp(user_txt)
    s2 = nlp(pres_txt)

    nlp_score = s1.similarity(s2)
    print("nlp Similarity for ", user_txt, " and ", pres_txt, ": ", nlp_score)
    #print("Sentiment score: ", sentiment.score)


#sim_test("UBC", "CBC")
#sim_test("UBC", "SFU")
#sim_test("UBC", "cannibalism")
#sim_test("Hacking", "stress")

print(compare_text(pres_txt, user_txt))

