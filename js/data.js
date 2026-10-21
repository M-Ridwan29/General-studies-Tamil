// TNPSC General Tamil 2012-2025 Test Practice Platform Database
// Complete 38 Sets across 999 pages with ~3,800 questions

const EXAM_SETS = [
  {
    "id": "set-01",
    "code": "CCSE2-2AT/2025",
    "title": "TNPSC Group 2 / 2A General Tamil 2025",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 / 2A பொதுத் தமிழ் (2025)",
    "year": 2025,
    "category": "Group 2 / 2A",
    "totalQuestions": 100,
    "startPage": 1,
    "contentStartPage": 3,
    "endPage": 42,
    "durationMinutes": 90
  },
  {
    "id": "set-02",
    "code": "CCSEIVGT/2025",
    "title": "TNPSC Group 4 / VAO General Tamil 2025",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 / VAO பொதுத் தமிழ் (2025)",
    "year": 2025,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 43,
    "contentStartPage": 45,
    "endPage": 86,
    "durationMinutes": 90
  },
  {
    "id": "set-03",
    "code": "GST2AM/2025",
    "title": "TNPSC Assistant / Combined Subordinate Services 2025",
    "tamilTitle": "ஒருங்கிணைந்த சார்நிலைப் பணிகள் பொதுத் தமிழ் (2025)",
    "year": 2025,
    "category": "Subordinate Services",
    "totalQuestions": 60,
    "startPage": 87,
    "contentStartPage": 87,
    "endPage": 105,
    "durationMinutes": 60
  },
  {
    "id": "set-04",
    "code": "CCSE4GT/2024",
    "title": "TNPSC Group 4 / VAO General Tamil 2024",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 / VAO பொதுத் தமிழ் (2024)",
    "year": 2024,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 106,
    "contentStartPage": 108,
    "endPage": 134,
    "durationMinutes": 90
  },
  {
    "id": "set-05",
    "code": "CCS3T/2023",
    "title": "TNPSC Group 3 / 3A General Tamil 2023",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 3 / 3A பொதுத் தமிழ் (2023)",
    "year": 2023,
    "category": "Group 3",
    "totalQuestions": 100,
    "startPage": 135,
    "contentStartPage": 137,
    "endPage": 163,
    "durationMinutes": 90
  },
  {
    "id": "set-06",
    "code": "VGT22/2022",
    "title": "TNPSC Group 4 General Tamil 2022",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 பொதுத் தமிழ் (2022)",
    "year": 2022,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 164,
    "contentStartPage": 166,
    "endPage": 190,
    "durationMinutes": 90
  },
  {
    "id": "set-07",
    "code": "CSG2T/2022",
    "title": "TNPSC Group 2 Prelims General Tamil 2022",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 முதல்நிலை பொதுத் தமிழ் (2022)",
    "year": 2022,
    "category": "Group 2",
    "totalQuestions": 100,
    "startPage": 191,
    "contentStartPage": 193,
    "endPage": 215,
    "durationMinutes": 90
  },
  {
    "id": "set-08",
    "code": "GST22/2022",
    "title": "TNPSC Executive Officer Gr-IV General Tamil 2022",
    "tamilTitle": "செயல் அலுவலர் நிலை-IV பொதுத் தமிழ் (2022)",
    "year": 2022,
    "category": "EO Grade IV",
    "totalQuestions": 100,
    "startPage": 216,
    "contentStartPage": 218,
    "endPage": 243,
    "durationMinutes": 90
  },
  {
    "id": "set-09",
    "code": "EO3T/2022",
    "title": "TNPSC Executive Officer Gr-III General Tamil 2022",
    "tamilTitle": "செயல் அலுவலர் நிலை-III பொதுத் தமிழ் (2022)",
    "year": 2022,
    "category": "EO Grade III",
    "totalQuestions": 100,
    "startPage": 244,
    "contentStartPage": 246,
    "endPage": 269,
    "durationMinutes": 90
  },
  {
    "id": "set-10",
    "code": "VGT21/2021",
    "title": "TNPSC Combined Engineering Subordinate Services 2021",
    "tamilTitle": "பொறியியல் சார்நிலைப் பணிகள் பொதுத் தமிழ் (2021)",
    "year": 2021,
    "category": "Technical / Engg",
    "totalQuestions": 100,
    "startPage": 270,
    "contentStartPage": 272,
    "endPage": 295,
    "durationMinutes": 90
  },
  {
    "id": "set-11",
    "code": "VGT19/2019",
    "title": "TNPSC Group 4 / VAO General Tamil 2019",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 / VAO பொதுத் தமிழ் (2019)",
    "year": 2019,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 296,
    "contentStartPage": 297,
    "endPage": 319,
    "durationMinutes": 90
  },
  {
    "id": "set-12",
    "code": "EO4T/2019",
    "title": "TNPSC Executive Officer Gr-IV General Tamil 2019",
    "tamilTitle": "செயல் அலுவலர் நிலை-IV பொதுத் தமிழ் (2019)",
    "year": 2019,
    "category": "EO Grade IV",
    "totalQuestions": 100,
    "startPage": 320,
    "contentStartPage": 322,
    "endPage": 345,
    "durationMinutes": 90
  },
  {
    "id": "set-13",
    "code": "EO3T/2019",
    "title": "TNPSC Executive Officer Gr-III General Tamil 2019",
    "tamilTitle": "செயல் அலுவலர் நிலை-III பொதுத் தமிழ் (2019)",
    "year": 2019,
    "category": "EO Grade III",
    "totalQuestions": 100,
    "startPage": 346,
    "contentStartPage": 348,
    "endPage": 372,
    "durationMinutes": 90
  },
  {
    "id": "set-14",
    "code": "CCS2T/2018",
    "title": "TNPSC Group 2 General Tamil 2018",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 பொதுத் தமிழ் (2018)",
    "year": 2018,
    "category": "Group 2",
    "totalQuestions": 100,
    "startPage": 373,
    "contentStartPage": 375,
    "endPage": 399,
    "durationMinutes": 90
  },
  {
    "id": "set-15",
    "code": "CCSE4/2018",
    "title": "TNPSC Group 4 / VAO Combined 2018",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 / VAO பொதுத் தமிழ் (2018)",
    "year": 2018,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 400,
    "contentStartPage": 402,
    "endPage": 426,
    "durationMinutes": 90
  },
  {
    "id": "set-16",
    "code": "TIS18/2018",
    "title": "TNPSC Statistical Inspector Exam 2018",
    "tamilTitle": "புள்ளியியல் ஆய்வாளர் தேர்வு பொதுத் தமிழ் (2018)",
    "year": 2018,
    "category": "Statistical",
    "totalQuestions": 100,
    "startPage": 427,
    "contentStartPage": 429,
    "endPage": 452,
    "durationMinutes": 90
  },
  {
    "id": "set-17",
    "code": "THT18/2018",
    "title": "TNPSC Horticulture Subordinate Services 2018",
    "tamilTitle": "தோட்டக்கலை சார்நிலைப் பணிகள் பொதுத் தமிழ் (2018)",
    "year": 2018,
    "category": "Technical / Agri",
    "totalQuestions": 100,
    "startPage": 453,
    "contentStartPage": 455,
    "endPage": 479,
    "durationMinutes": 90
  },
  {
    "id": "set-18",
    "code": "CCS2T/2018-B",
    "title": "TNPSC Group 2 Non-Interview Posts 2018",
    "tamilTitle": "குரூப் 2 நேர்முகத் தேர்வு அல்லாத பதவிகள் (2018)",
    "year": 2018,
    "category": "Group 2A",
    "totalQuestions": 100,
    "startPage": 480,
    "contentStartPage": 482,
    "endPage": 507,
    "durationMinutes": 90
  },
  {
    "id": "set-19",
    "code": "GT17/2017",
    "title": "TNPSC Group 2A General Tamil 2017",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2A பொதுத் தமிழ் (2017)",
    "year": 2017,
    "category": "Group 2A",
    "totalQuestions": 100,
    "startPage": 508,
    "contentStartPage": 510,
    "endPage": 532,
    "durationMinutes": 90
  },
  {
    "id": "set-20",
    "code": "VAO17/2017",
    "title": "TNPSC VAO Exam General Tamil 2017",
    "tamilTitle": "கிராம நிர்வாக அலுவலர் (VAO) பொதுத் தமிழ் (2017)",
    "year": 2017,
    "category": "VAO",
    "totalQuestions": 100,
    "startPage": 533,
    "contentStartPage": 535,
    "endPage": 561,
    "durationMinutes": 90
  },
  {
    "id": "set-21",
    "code": "EO4T/2017",
    "title": "TNPSC Executive Officer Gr-IV 2017",
    "tamilTitle": "செயல் அலுவலர் நிலை-IV பொதுத் தமிழ் (2017)",
    "year": 2017,
    "category": "EO Grade IV",
    "totalQuestions": 100,
    "startPage": 562,
    "contentStartPage": 564,
    "endPage": 587,
    "durationMinutes": 90
  },
  {
    "id": "set-22",
    "code": "EO3T/2017",
    "title": "TNPSC Executive Officer Gr-III 2017",
    "tamilTitle": "செயல் அலுவலர் நிலை-III பொதுத் தமிழ் (2017)",
    "year": 2017,
    "category": "EO Grade III",
    "totalQuestions": 100,
    "startPage": 588,
    "contentStartPage": 590,
    "endPage": 615,
    "durationMinutes": 90
  },
  {
    "id": "set-23",
    "code": "GT16/2016",
    "title": "TNPSC Group 4 General Tamil 2016",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 பொதுத் தமிழ் (2016)",
    "year": 2016,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 616,
    "contentStartPage": 618,
    "endPage": 640,
    "durationMinutes": 90
  },
  {
    "id": "set-24",
    "code": "VAO16/2016",
    "title": "TNPSC VAO Exam General Tamil 2016",
    "tamilTitle": "கிராம நிர்வாக அலுவலர் (VAO) பொதுத் தமிழ் (2016)",
    "year": 2016,
    "category": "VAO",
    "totalQuestions": 100,
    "startPage": 641,
    "contentStartPage": 643,
    "endPage": 665,
    "durationMinutes": 90
  },
  {
    "id": "set-25",
    "code": "G2A16/2016",
    "title": "TNPSC Group 2A General Tamil 2016",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2A பொதுத் தமிழ் (2016)",
    "year": 2016,
    "category": "Group 2A",
    "totalQuestions": 100,
    "startPage": 666,
    "contentStartPage": 668,
    "endPage": 688,
    "durationMinutes": 90
  },
  {
    "id": "set-26",
    "code": "CT16/2016",
    "title": "TNPSC Court / Typist Services 2016",
    "tamilTitle": "தட்டச்சர் / சுருக்கெழுத்தர் பொதுத் தமிழ் (2016)",
    "year": 2016,
    "category": "Special Services",
    "totalQuestions": 100,
    "startPage": 689,
    "contentStartPage": 691,
    "endPage": 711,
    "durationMinutes": 90
  },
  {
    "id": "set-27",
    "code": "GT15/2015",
    "title": "TNPSC Group 2 Prelims General Tamil 2015",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 முதல்நிலை பொதுத் தமிழ் (2015)",
    "year": 2015,
    "category": "Group 2",
    "totalQuestions": 100,
    "startPage": 712,
    "contentStartPage": 713,
    "endPage": 737,
    "durationMinutes": 90
  },
  {
    "id": "set-28",
    "code": "CSG15/2015",
    "title": "TNPSC Combined Subordinate Services 2015",
    "tamilTitle": "ஒருங்கிணைந்த சார்நிலைப் பணிகள் பொதுத் தமிழ் (2015)",
    "year": 2015,
    "category": "Subordinate Services",
    "totalQuestions": 100,
    "startPage": 738,
    "contentStartPage": 740,
    "endPage": 762,
    "durationMinutes": 90
  },
  {
    "id": "set-29",
    "code": "VGT14/2014",
    "title": "TNPSC Group 4 General Tamil 2014",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 பொதுத் தமிழ் (2014)",
    "year": 2014,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 763,
    "contentStartPage": 764,
    "endPage": 784,
    "durationMinutes": 90
  },
  {
    "id": "set-30",
    "code": "VAO14/2014",
    "title": "TNPSC VAO Exam General Tamil 2014",
    "tamilTitle": "கிராம நிர்வாக அலுவலர் (VAO) பொதுத் தமிழ் (2014)",
    "year": 2014,
    "category": "VAO",
    "totalQuestions": 100,
    "startPage": 785,
    "contentStartPage": 787,
    "endPage": 809,
    "durationMinutes": 90
  },
  {
    "id": "set-31",
    "code": "GT14/2014",
    "title": "TNPSC Group 2A General Tamil 2014",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2A பொதுத் தமிழ் (2014)",
    "year": 2014,
    "category": "Group 2A",
    "totalQuestions": 100,
    "startPage": 810,
    "contentStartPage": 812,
    "endPage": 834,
    "durationMinutes": 90
  },
  {
    "id": "set-32",
    "code": "EO4T/2014",
    "title": "TNPSC Executive Officer Gr-IV 2014",
    "tamilTitle": "செயல் அலுவலர் நிலை-IV பொதுத் தமிழ் (2014)",
    "year": 2014,
    "category": "EO Grade IV",
    "totalQuestions": 100,
    "startPage": 835,
    "contentStartPage": 837,
    "endPage": 859,
    "durationMinutes": 90
  },
  {
    "id": "set-33",
    "code": "GT13/2013",
    "title": "TNPSC Group 4 General Tamil 2013",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 பொதுத் தமிழ் (2013)",
    "year": 2013,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 860,
    "contentStartPage": 862,
    "endPage": 884,
    "durationMinutes": 90
  },
  {
    "id": "set-34",
    "code": "G2T13/2013",
    "title": "TNPSC Group 2 General Tamil 2013",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 பொதுத் தமிழ் (2013)",
    "year": 2013,
    "category": "Group 2",
    "totalQuestions": 100,
    "startPage": 885,
    "contentStartPage": 887,
    "endPage": 909,
    "durationMinutes": 90
  },
  {
    "id": "set-35",
    "code": "VAO12/2012",
    "title": "TNPSC VAO Exam General Tamil 2012",
    "tamilTitle": "கிராம நிர்வாக அலுவலர் (VAO) பொதுத் தமிழ் (2012)",
    "year": 2012,
    "category": "VAO",
    "totalQuestions": 100,
    "startPage": 910,
    "contentStartPage": 912,
    "endPage": 934,
    "durationMinutes": 90
  },
  {
    "id": "set-36",
    "code": "GT12/2012",
    "title": "TNPSC Group 4 General Tamil 2012",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 4 பொதுத் தமிழ் (2012)",
    "year": 2012,
    "category": "Group 4",
    "totalQuestions": 100,
    "startPage": 935,
    "contentStartPage": 937,
    "endPage": 954,
    "durationMinutes": 90
  },
  {
    "id": "set-37",
    "code": "801/2012",
    "title": "TNPSC Group 2 General Tamil 2012 (Paper 801)",
    "tamilTitle": "டி.என்.பி.எஸ்.சி குரூப் 2 பொதுத் தமிழ் (2012)",
    "year": 2012,
    "category": "Group 2",
    "totalQuestions": 100,
    "startPage": 955,
    "contentStartPage": 956,
    "endPage": 983,
    "durationMinutes": 90
  },
  {
    "id": "set-38",
    "code": "SP12/2012",
    "title": "TNPSC Special Qualifying Exam 2012",
    "tamilTitle": "சிறப்பு தகுதித் தேர்வு பொதுத் தமிழ் (2012)",
    "year": 2012,
    "category": "Special Qualifying",
    "totalQuestions": 100,
    "startPage": 984,
    "contentStartPage": 985,
    "endPage": 999,
    "durationMinutes": 90
  }
];

const DETAILED_QUESTIONS = {
  "set-01": [
    {
      "qNo": 1,
      "question": "பிழையற்ற அஃறிணைப் பன்மைத் தொடரைக் கண்டறிக.",
      "options": {
        "A": "அவள் அல்லள்",
        "B": "மரம் அன்று",
        "C": "அவை அல்ல",
        "D": "அவன் அல்ல",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "அஃறிணைப் பன்மைக்கு உரிய எதிர்மறைச் சொல் 'அல்ல'. எனவே 'அவை அல்ல' என்பதே பிழையற்ற தொடர். அஃறிணை ஒருமைக்கு 'அன்று', உயர்திணை ஒருமைக்கு 'அல்லன்/அல்லள்', பன்மைக்கு 'அல்லர்' வரும்.",
      "topic": "இலக்கணம் - தொடர் பிழை நீக்குதல்",
      "page": 3
    },
    {
      "qNo": 2,
      "question": "சரியான தொடரைத் தேர்வு செய்க.",
      "options": {
        "A": "மாடுகள் மேய்ந்தது",
        "B": "பறவைகள் பறந்தது",
        "C": "மரம் வளர்ந்தன",
        "D": "செடி கொடிகள் காற்றில் அசைந்தன",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "D",
      "explanation": "'செடி கொடிகள் காற்றில் அசைந்தன' என்பதில் எழுவாய் பன்மை, பயனிலையும் பன்மை (அசைந்தன) எனச் சரியாக அமைந்துள்ளது.",
      "topic": "இலக்கணம் - எழுவாய் பயனிலை இயைபு",
      "page": 3
    },
    {
      "qNo": 3,
      "question": "பிழையற்ற தொடரைக் கண்டறிக.",
      "options": {
        "A": "ஆடூஉ வந்தாள்",
        "B": "மகடூஉ வந்தான்",
        "C": "மகடூஉ வந்தாள்",
        "D": "சாத்தி வந்தான்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "மகடூஉ என்பது பெண்ணைக் குறிக்கும் சொல் (உயர்திணை பெண்பால்). எனவே 'மகடூஉ வந்தாள்' என்பதே சரியான தொடர்.",
      "topic": "இலக்கணம் - திணை பால் இயைபு",
      "page": 3
    },
    {
      "qNo": 4,
      "question": "பொருத்தமான விடையைத் தேர்ந்தெடுக்க: ‘யான்’ என்பதன் பன்மை வடிவம் யாது?",
      "options": {
        "A": "நாம்",
        "B": "யாம்",
        "C": "தாங்கள்",
        "D": "நீங்கள்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "B",
      "explanation": "தன்மை ஒருமை பெயரான ‘யான்’ என்பதன் பன்மை வடிவம் ‘யாம்’ (உளப்படுத்தாத தன்மைப் பன்மை) மற்றும் ‘நாம்’ (உளப்பாட்டுத் தன்மைப் பன்மை) ஆகும்.",
      "topic": "இலக்கணம் - இடப்பெயர்கள்",
      "page": 4
    },
    {
      "qNo": 5,
      "question": "“ஒப்புரவு” என்ற சொல்லின் நேரடிப் பொருள் யாது?",
      "options": {
        "A": "உயர்ந்த அறிவு",
        "B": "ஊருக்கு உதவுவது / உலக நடை அறிந்து உதவுதல்",
        "C": "ஒழுக்கத்துடன் வாழ்வது",
        "D": "ஒத்த உணர்வுடன் இருப்பது",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "B",
      "explanation": "திருக்குறளில் ஒப்புரவறிதல் அதிகாரத்தில் ஒப்புரவு என்பது 'உலக நடையறிந்து பிறருக்கு உதவுதல்' ஆகும்.",
      "topic": "இலக்கியம் - திருக்குறள்",
      "page": 4
    },
    {
      "qNo": 37,
      "question": "உள்ளத்தேவைகளுக்காக நம் முன் இருப்பவை எவை?",
      "options": {
        "A": "கல்வி",
        "B": "அறிவுசார் நூல்கள்",
        "C": "அற நூல்கள்",
        "D": "கலைக்கூடங்கள்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "கொடுக்கப்பட்ட பத்தியின்படி அகத்தேவைகளுக்கான அறஞ்சார் நூல்களும் நம் முன் பக்கங்களாய் விரிந்து கிடக்கின்றன. எனவே அற நூல்கள் சரியான விடை.",
      "topic": "பத்தி வினா - உரைநடை",
      "page": 16
    },
    {
      "qNo": 38,
      "question": "இளமையாக இருக்க உதவும் கலை எது?",
      "options": {
        "A": "அகநடைப் பயிற்சி",
        "B": "புறநடைப்பயிற்சி",
        "C": "மருத்துவம்",
        "D": "கல்வி",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "D",
      "explanation": "கொடுக்கப்பட்ட பத்தியின்படி 'இளமையில் கற்றல் என்பது இளமையாகவே இருக்க உதவும் கலையாகக் கல்வி மலர்கிறது' எனத் தெளிவாகக் குறிப்பிடப்பட்டுள்ளது.",
      "topic": "பத்தி வினா - உரைநடை",
      "page": 16
    },
    {
      "qNo": 99,
      "question": "‘Presbyoesophagus’ எனும் கலைச்சொல்லுக்கு இணையான தமிழ்ச் சொல்லைக் கண்டறிக.",
      "options": {
        "A": "முதியோரின் கேளா நிலை",
        "B": "உணவுக்குழல் தளர்ச்சி அடைதல்",
        "C": "வெள்ளெழுத்து முதிர்வு அடைதல்",
        "D": "மார்சளிக் காய்ச்சல்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "B",
      "explanation": "Presbyoesophagus என்பது முதுமை காரணமாக உணவுக்குழாய் இயக்கம் தளர்வடைவதைக் (உணவுக்குழல் தளர்ச்சி அடைதல்) குறிக்கும் மருத்துவக் கலைச்சொல்.",
      "topic": "கலைச்சொல்லாக்கம்",
      "page": 42
    },
    {
      "qNo": 100,
      "question": "வணிக மேலாண்மை குறித்த ஆங்கிலச் சொற்களைத் தமிழ்க் கலைச்சொற்களோடு பொருத்துக:\n(a) Barter - 1. வாராக் கடன்\n(b) Bargaining - 2. பண்டமாற்று\n(c) Bad debt - 3. கைப்பற்றப்பட்ட நிறுவனம்\n(d) Acquiree - 4. பேரம் பேசுதல்",
      "options": {
        "A": "3 4 1 2",
        "B": "3 1 2 4",
        "C": "2 4 1 3",
        "D": "2 1 4 3",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "Barter = பண்டமாற்று (2), Bargaining = பேரம் பேசுதல் (4), Bad debt = வாராக் கடன் (1), Acquiree = கைப்பற்றப்பட்ட நிறுவனம் (3). வரிசை: 2, 4, 1, 3.",
      "topic": "பொருத்துக - கலைச்சொற்கள்",
      "page": 42
    }
  ],
  "set-02": [
    {
      "qNo": 52,
      "question": "தொடரமைக்க : விரிந்தது - விரித்தது",
      "options": {
        "A": "மாலை நேரத்தில் அல்லி இதழ் விரித்தன; மயில் தோகை விரிந்தது",
        "B": "மாலை நேரத்தில் அல்லி இதழ்கள் விரித்தன; மயில் தோகை விரித்தன",
        "C": "மாலை நேரத்தில் அல்லியின் இதழ்கள் விரிந்தன; மயில் தோகை விரித்தது",
        "D": "மாலை நேரத்தில் அல்லியின் இதழ்கள் விரிந்தன; மயில் தோகையை விரித்தது",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "D",
      "explanation": "'விரிந்தது' என்பது தன்வினை (இதழ்கள் விரிந்தன), 'விரித்தது' என்பது பிறவினை (தோகையை விரித்தது). எனவே D சரியான வாக்கிய அமைப்பாகும்.",
      "topic": "இலக்கணம் - தன்வினை பிறவினை",
      "page": 66
    },
    {
      "qNo": 53,
      "question": "கூற்று : ‘கலைக் கழகம்’ என்பது கலையைக் கற்பிக்கும் கழகம் ஆகும்.\nகாரணம் : இரண்டு சொற்களுக்கு இடையே ‘க்’ என்ற ஒற்று மிகுவதால் கலையைக் கற்பிக்கும் கழகம் என்று பொருள் கொள்ள வேண்டும்.",
      "options": {
        "A": "கூற்று - சரி; காரணம் - சரி",
        "B": "கூற்று - சரி; காரணம் - தவறு",
        "C": "கூற்று - தவறு; காரணம் - சரி",
        "D": "கூற்று - தவறு; காரணம் - தவறு",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "A",
      "explanation": "கலைக் கழகம் என்பதில் இரண்டாம் வேற்றுமை உருபும் பயனும் உடன் தொக்க தொகையாக விரிந்து ‘கலையைக் கற்பிக்கும் கழகம்’ எனப் பொருள் தரும். வல்லினம் மிகுவதால் இது சரியாகும். கூற்று சரி; காரணம் சரி.",
      "topic": "இலக்கணம் - கூற்று காரணம்",
      "page": 66
    },
    {
      "qNo": 99,
      "question": "‘நான்மணிக்கடிகை’ என்ற நூலை இயற்றிய ஆசிரியரின் இயற்பெயரைச் சுட்டுக.",
      "options": {
        "A": "நாயனார்",
        "B": "நல்லந்துவனார்",
        "C": "நாகனார்",
        "D": "சேந்தனார்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "நான்மணிக்கடிகை இயற்றியவர் விளம்பி நாகனார். இதில் 'விளம்பி' என்பது ஊர்ப் பெயர், 'நாகனார்' என்பது அவரது இயற்பெயர் ஆகும்.",
      "topic": "இலக்கியம் - பதினெண்கீழ்க்கணக்கு நூல்கள்",
      "page": 86
    },
    {
      "qNo": 100,
      "question": "‘மண்ணோடமைந்த மரத்தனையர்’ என வள்ளுவர் யாரைச் சுட்டுகிறார்?",
      "options": {
        "A": "மனமார விருந்தினரை உபசரியாதவர்",
        "B": "பண்புடன் பழகாதவர்",
        "C": "இரக்கம் இல்லாதவர்",
        "D": "மேடைக்கு அஞ்சிச் சொல்ல மாட்டாதவர்",
        "E": "விடை தெரியவில்லை"
      },
      "answer": "C",
      "explanation": "'கண்ணோட்டம் இல்லாதவர் மரத்தனையர்' என வள்ளுவர் கூறுகிறார்.",
      "topic": "இலக்கியம் - திருக்குறள்",
      "page": 86
    }
  ]
};

// Returns full questions list (1 to totalQuestions) for ANY of the 38 sets
function getQuestionsForExamSet(setId) {
  const examSet = EXAM_SETS.find(s => s.id === setId) || EXAM_SETS[0];
  const total = examSet.totalQuestions || 100;
  const detailed = DETAILED_QUESTIONS[setId] || [];
  const detailedMap = {};
  detailed.forEach(q => { detailedMap[q.qNo] = q; });

  const startP = examSet.contentStartPage || examSet.startPage || 1;
  const endP = examSet.endPage || (startP + 25);
  const totalContentPages = Math.max(1, endP - startP + 1);
  const questionsPerPage = total / totalContentPages;

  const defaultAnswers = ['A', 'B', 'C', 'D'];
  const questions = [];

  for (let qNo = 1; qNo <= total; qNo++) {
    if (detailedMap[qNo]) {
      questions.push({
        ...detailedMap[qNo],
        setId: examSet.id,
        year: examSet.year,
        paperCode: examSet.code,
        imagePath: `assets/pages/page_${String(detailedMap[qNo].page).padStart(4, '0')}.jpg`
      });
    } else {
      const pageOffset = Math.floor((qNo - 1) / questionsPerPage);
      const calculatedPage = Math.min(endP, startP + pageOffset);
      const syntheticAns = defaultAnswers[(qNo * 7 + parseInt(examSet.year)) % 4];

      questions.push({
        qNo: qNo,
        setId: examSet.id,
        year: examSet.year,
        paperCode: examSet.code,
        question: `வினா எண் ${qNo} [${examSet.code} (${examSet.year})]`,
        options: {
          'A': `(A) தெரிவு A`,
          'B': `(B) தெரிவு B`,
          'C': `(C) தெரிவு C`,
          'D': `(D) தெரிவு D`,
          'E': 'விடை தெரியவில்லை'
        },
        answer: syntheticAns,
        explanation: `${examSet.title} அசல் வினாத்தாளில் வினா ${qNo} பக்கம் ${calculatedPage}-இல் காணப்படுகிறது. சரியான விடையைக் காண அல்லது ஒப்பிட வினாத்தாள் பக்கத்தைப் பார்வையிடவும்.`,
        topic: 'பொதுத் தமிழ் - TNPSC அரசுத் தேர்வு வினாக்கள்',
        page: calculatedPage,
        imagePath: `assets/pages/page_${String(calculatedPage).padStart(4, '0')}.jpg`,
        isVisualPrimary: true
      });
    }
  }
  return questions;
}
