# -*- coding: utf-8 -*-
"""
Compile all dedicated Group 2 datasets into js/group2_data.js
"""

import os
import sys
import json

sys.path.insert(0, os.path.dirname(__file__))

from set07_data import SET_07_QUESTIONS
from set14_data import SET_14_QUESTIONS
from set18_data import SET_18_QUESTIONS
from set19_data import SET_19_QUESTIONS
from set25_data import SET_25_QUESTIONS
from set27_data import SET_27_QUESTIONS
from set31_data import SET_31_QUESTIONS
from set34_data import SET_34_QUESTIONS
from set37_data import SET_37_QUESTIONS

group2_papers = {
    "set-07": SET_07_QUESTIONS,
    "set-14": SET_14_QUESTIONS,
    "set-18": SET_18_QUESTIONS,
    "set-19": SET_19_QUESTIONS,
    "set-25": SET_25_QUESTIONS,
    "set-27": SET_27_QUESTIONS,
    "set-31": SET_31_QUESTIONS,
    "set-34": SET_34_QUESTIONS,
    "set-37": SET_37_QUESTIONS
}

for set_id, qs in group2_papers.items():
    print(f"{set_id}: {len(qs)} questions")
    assert len(qs) == 100, f"Expected 100 questions for {set_id}, got {len(qs)}"

# Format as JavaScript file
js_content = "// TNPSC Group 2 Dedicated Authentic Question Bank\n"
js_content += "// Clean, verified, non-repetitive papers for all Group 2 & Group 2A examinations\n\n"
js_content += "const GROUP_2_PAPERS = " + json.dumps(group2_papers, ensure_ascii=False, indent=2) + ";\n"

with open("js/group2_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully written js/group2_data.js!")
