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

DATA_DIR = os.path.relpath("./data/")

nltk.download('stopwords', download_dir=DATA_DIR)

#print(list(api.info()["models"].keys()))

# Cosine Similarity toy func
#cosine_similarity = np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))
#print(f"Cosine Similarity: {cosine_similarity:.4f}")

#google_news_vectors = api.load('word2vec-google-news-300')
#print("Size of vocabulary: ", len(google_news_vectors))

nlp = spacy.load("en_core_web_md")

doc = nlp("pineapple") # extract all interesting information about the document
print(doc.vector[:10])

# MADE A CHANGE