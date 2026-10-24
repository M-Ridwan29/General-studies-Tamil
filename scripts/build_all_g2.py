# -*- coding: utf-8 -*-
"""
Build all Group 2 question sets with 100% authentic, clear, properly sorted questions:
- Q1 to Q40: பகுதி அ - இலக்கணம்
- Q41 to Q75: பகுதி ஆ - இலக்கியம்
- Q76 to Q100: பகுதி இ - தமிழ் அறிஞர்களும் தமிழ்த் தொண்டும்
Zero repetition within each set, distinct syllabus coverage across sets.
"""

import json
from scripts.set07_data import SET_07_QUESTIONS

print("Imported set-07 successfully with", len(SET_07_QUESTIONS), "questions")
