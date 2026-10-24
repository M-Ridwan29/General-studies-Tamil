import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('js/group2_data.js', 'r', encoding='utf-8') as f:
    papers = json.loads(f.read().split('const GROUP_2_PAPERS = ')[1].rstrip(';\n '))

sets_to_check = ['set-07', 'set-14', 'set-18', 'set-19', 'set-25', 'set-27']

for s in sets_to_check:
    print(f"=== {s} Q18 ===")
    q = papers[s][17] # index 17 = Q18
    print("Q:", q['question'])
    print("Opts:", q['options'])
    print("Ans:", q['answer'])
