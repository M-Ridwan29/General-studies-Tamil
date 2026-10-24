import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('js/group2_data.js', 'r', encoding='utf-8') as f:
    papers = json.loads(f.read().split('const GROUP_2_PAPERS = ')[1].rstrip(';\n '))

with open('js/data.js', 'r', encoding='utf-8') as f:
    d = f.read()

m = re.search(r'const SET_01_QUESTIONS = (\[[\s\S]*?\]);\s*const TNPSC_QUESTION_BANK', d)
set01_text = set()
for qm in re.finditer(r'"question":\s*"([^"]+)"', m.group(1)):
    set01_text.add(qm.group(1).strip())

all_used = set(set01_text)
order = ['set-07', 'set-14', 'set-18', 'set-19', 'set-25', 'set-27', 'set-31', 'set-34', 'set-37']

for s_id in order:
    dup_qnos = []
    pA = []
    pB = []
    pC = []
    for idx, q in enumerate(papers[s_id]):
        qt = q['question'].strip()
        qno = idx + 1
        if qt in all_used:
            dup_qnos.append(qno)
            if qno <= 40:
                pA.append(qno)
            elif qno <= 75:
                pB.append(qno)
            else:
                pC.append(qno)
        else:
            all_used.add(qt)
    print(f"{s_id}: total dup={len(dup_qnos)} | Q1-40 (இலக்கணம்): {len(pA)} {pA} | Q41-75 (இலக்கியம்): {len(pB)} {pB} | Q76-100 (அறிஞர்கள்): {len(pC)} {pC}")
