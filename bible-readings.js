// Reading sequence transcribed from the supplied Bible Reading Schedule.
const BIBLE_READING_GROUPS = [
  {
    "title": "The Writings of Moses",
    "readings": [
      {
        "id": "reading-001",
        "text": "Genesis chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-002",
        "text": "Genesis chapters 4-7",
        "marker": null
      },
      {
        "id": "reading-003",
        "text": "Genesis chapters 8-11",
        "marker": null
      },
      {
        "id": "reading-004",
        "text": "Genesis chapters 12-15",
        "marker": "history"
      },
      {
        "id": "reading-005",
        "text": "Genesis chapters 16-18",
        "marker": "history"
      },
      {
        "id": "reading-006",
        "text": "Genesis chapters 19-22",
        "marker": "history"
      },
      {
        "id": "reading-007",
        "text": "Genesis chapters 23-24",
        "marker": "history"
      },
      {
        "id": "reading-008",
        "text": "Genesis chapters 25-27",
        "marker": "history"
      },
      {
        "id": "reading-009",
        "text": "Genesis chapters 28-30",
        "marker": "history"
      },
      {
        "id": "reading-010",
        "text": "Genesis chapters 31-32",
        "marker": "history"
      },
      {
        "id": "reading-011",
        "text": "Genesis chapters 33-34",
        "marker": "history"
      },
      {
        "id": "reading-012",
        "text": "Genesis chapters 35-37",
        "marker": "history"
      },
      {
        "id": "reading-013",
        "text": "Genesis chapters 38-40",
        "marker": "history"
      },
      {
        "id": "reading-014",
        "text": "Genesis chapters 41-42",
        "marker": "history"
      },
      {
        "id": "reading-015",
        "text": "Genesis chapters 43-45",
        "marker": "history"
      },
      {
        "id": "reading-016",
        "text": "Genesis chapters 46-48",
        "marker": "history"
      },
      {
        "id": "reading-017",
        "text": "Genesis chapters 49-50",
        "marker": "history"
      },
      {
        "id": "reading-018",
        "text": "Exodus chapters 1-4",
        "marker": "history"
      },
      {
        "id": "reading-019",
        "text": "Exodus chapters 5-7",
        "marker": "history"
      },
      {
        "id": "reading-020",
        "text": "Exodus chapters 8-10",
        "marker": "history"
      },
      {
        "id": "reading-021",
        "text": "Exodus chapters 11-13",
        "marker": "history"
      },
      {
        "id": "reading-022",
        "text": "Exodus chapters 14-15",
        "marker": "history"
      },
      {
        "id": "reading-023",
        "text": "Exodus chapters 16-18",
        "marker": "history"
      },
      {
        "id": "reading-024",
        "text": "Exodus chapters 19-21",
        "marker": "history"
      },
      {
        "id": "reading-025",
        "text": "Exodus chapters 22-25",
        "marker": null
      },
      {
        "id": "reading-026",
        "text": "Exodus chapters 26-28",
        "marker": null
      },
      {
        "id": "reading-027",
        "text": "Exodus chapters 29-30",
        "marker": null
      },
      {
        "id": "reading-028",
        "text": "Exodus chapters 31-33",
        "marker": "history"
      },
      {
        "id": "reading-029",
        "text": "Exodus chapters 34-35",
        "marker": "history"
      },
      {
        "id": "reading-030",
        "text": "Exodus chapters 36-38",
        "marker": null
      },
      {
        "id": "reading-031",
        "text": "Exodus chapters 39-40",
        "marker": null
      },
      {
        "id": "reading-032",
        "text": "Leviticus chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-033",
        "text": "Leviticus chapters 5-7",
        "marker": null
      },
      {
        "id": "reading-034",
        "text": "Leviticus chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-035",
        "text": "Leviticus chapters 11-13",
        "marker": null
      },
      {
        "id": "reading-036",
        "text": "Leviticus chapters 14-15",
        "marker": null
      },
      {
        "id": "reading-037",
        "text": "Leviticus chapters 16-18",
        "marker": null
      },
      {
        "id": "reading-038",
        "text": "Leviticus chapters 19-21",
        "marker": null
      },
      {
        "id": "reading-039",
        "text": "Leviticus chapters 22-23",
        "marker": null
      },
      {
        "id": "reading-040",
        "text": "Leviticus chapters 24-25",
        "marker": null
      },
      {
        "id": "reading-041",
        "text": "Leviticus chapters 26-27",
        "marker": null
      },
      {
        "id": "reading-042",
        "text": "Numbers chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-043",
        "text": "Numbers chapters 4-6",
        "marker": null
      },
      {
        "id": "reading-044",
        "text": "Numbers chapters 7-9",
        "marker": null
      },
      {
        "id": "reading-045",
        "text": "Numbers chapters 10-12",
        "marker": "history"
      },
      {
        "id": "reading-046",
        "text": "Numbers chapters 13-15",
        "marker": "history"
      },
      {
        "id": "reading-047",
        "text": "Numbers chapters 16-18",
        "marker": "history"
      },
      {
        "id": "reading-048",
        "text": "Numbers chapters 19-21",
        "marker": "history"
      },
      {
        "id": "reading-049",
        "text": "Numbers chapters 22-24",
        "marker": "history"
      },
      {
        "id": "reading-050",
        "text": "Numbers chapters 25-27",
        "marker": "history"
      },
      {
        "id": "reading-051",
        "text": "Numbers chapters 28-30",
        "marker": null
      },
      {
        "id": "reading-052",
        "text": "Numbers chapters 31-32",
        "marker": "history"
      },
      {
        "id": "reading-053",
        "text": "Numbers chapters 33-36",
        "marker": "history"
      },
      {
        "id": "reading-054",
        "text": "Deuteronomy chapters 1-2",
        "marker": null
      },
      {
        "id": "reading-055",
        "text": "Deuteronomy chapters 3-4",
        "marker": "history"
      },
      {
        "id": "reading-056",
        "text": "Deuteronomy chapters 5-7",
        "marker": null
      },
      {
        "id": "reading-057",
        "text": "Deuteronomy chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-058",
        "text": "Deuteronomy chapters 11-13",
        "marker": null
      },
      {
        "id": "reading-059",
        "text": "Deuteronomy chapters 14-16",
        "marker": null
      },
      {
        "id": "reading-060",
        "text": "Deuteronomy chapters 17-19",
        "marker": "history"
      },
      {
        "id": "reading-061",
        "text": "Deuteronomy chapters 20-22",
        "marker": null
      },
      {
        "id": "reading-062",
        "text": "Deuteronomy chapters 23-26",
        "marker": null
      },
      {
        "id": "reading-063",
        "text": "Deuteronomy chapters 27-28",
        "marker": null
      },
      {
        "id": "reading-064",
        "text": "Deuteronomy chapters 29-31",
        "marker": "history"
      },
      {
        "id": "reading-065",
        "text": "Deuteronomy chapter 32",
        "marker": "history"
      },
      {
        "id": "reading-066",
        "text": "Deuteronomy chapters 33-34",
        "marker": "history"
      }
    ]
  },
  {
    "title": "Israel Enters the Promised Land",
    "readings": [
      {
        "id": "reading-067",
        "text": "Joshua chapters 1-4",
        "marker": "history"
      },
      {
        "id": "reading-068",
        "text": "Joshua chapters 5-7",
        "marker": "history"
      },
      {
        "id": "reading-069",
        "text": "Joshua chapters 8-9",
        "marker": "history"
      },
      {
        "id": "reading-070",
        "text": "Joshua chapters 10-12",
        "marker": "history"
      },
      {
        "id": "reading-071",
        "text": "Joshua chapters 13-15",
        "marker": "history"
      },
      {
        "id": "reading-072",
        "text": "Joshua chapters 16-18",
        "marker": "history"
      },
      {
        "id": "reading-073",
        "text": "Joshua chapters 19-21",
        "marker": "history"
      },
      {
        "id": "reading-074",
        "text": "Joshua chapters 22-24",
        "marker": "history"
      },
      {
        "id": "reading-075",
        "text": "Judges chapters 1-2",
        "marker": "history"
      },
      {
        "id": "reading-076",
        "text": "Judges chapters 3-5",
        "marker": "history"
      },
      {
        "id": "reading-077",
        "text": "Judges chapters 6-7",
        "marker": "history"
      },
      {
        "id": "reading-078",
        "text": "Judges chapters 8-9",
        "marker": "history"
      },
      {
        "id": "reading-079",
        "text": "Judges chapters 10-11",
        "marker": "history"
      },
      {
        "id": "reading-080",
        "text": "Judges chapters 12-13",
        "marker": "history"
      },
      {
        "id": "reading-081",
        "text": "Judges chapters 14-16",
        "marker": "history"
      },
      {
        "id": "reading-082",
        "text": "Judges chapters 17-19",
        "marker": "history"
      },
      {
        "id": "reading-083",
        "text": "Judges chapters 20-21",
        "marker": "history"
      },
      {
        "id": "reading-084",
        "text": "Ruth chapters 1-4",
        "marker": "history"
      }
    ]
  },
  {
    "title": "When the Kings Ruled Israel",
    "readings": [
      {
        "id": "reading-085",
        "text": "1 Samuel chapters 1-2",
        "marker": "history"
      },
      {
        "id": "reading-086",
        "text": "1 Samuel chapters 3-6",
        "marker": "history"
      },
      {
        "id": "reading-087",
        "text": "1 Samuel chapters 7-9",
        "marker": "history"
      },
      {
        "id": "reading-088",
        "text": "1 Samuel chapters 10-12",
        "marker": "history"
      },
      {
        "id": "reading-089",
        "text": "1 Samuel chapters 13-14",
        "marker": "history"
      },
      {
        "id": "reading-090",
        "text": "1 Samuel chapters 15-16",
        "marker": "history"
      },
      {
        "id": "reading-091",
        "text": "1 Samuel chapters 17-18",
        "marker": "history"
      },
      {
        "id": "reading-092",
        "text": "1 Samuel chapters 19-21",
        "marker": "history"
      },
      {
        "id": "reading-093",
        "text": "1 Samuel chapters 22-24",
        "marker": "history"
      },
      {
        "id": "reading-094",
        "text": "1 Samuel chapters 25-27",
        "marker": "history"
      },
      {
        "id": "reading-095",
        "text": "1 Samuel chapters 28-31",
        "marker": "history"
      },
      {
        "id": "reading-096",
        "text": "2 Samuel chapters 1-2",
        "marker": "history"
      },
      {
        "id": "reading-097",
        "text": "2 Samuel chapters 3-5",
        "marker": "history"
      },
      {
        "id": "reading-098",
        "text": "2 Samuel chapters 6-8",
        "marker": "history"
      },
      {
        "id": "reading-099",
        "text": "2 Samuel chapters 9-12",
        "marker": "history"
      },
      {
        "id": "reading-100",
        "text": "2 Samuel chapters 13-14",
        "marker": "history"
      },
      {
        "id": "reading-101",
        "text": "2 Samuel chapters 15-16",
        "marker": "history"
      },
      {
        "id": "reading-102",
        "text": "2 Samuel chapters 17-18",
        "marker": "history"
      },
      {
        "id": "reading-103",
        "text": "2 Samuel chapters 19-20",
        "marker": "history"
      },
      {
        "id": "reading-104",
        "text": "2 Samuel chapters 21-22",
        "marker": "history"
      },
      {
        "id": "reading-105",
        "text": "2 Samuel chapters 23-24",
        "marker": "history"
      },
      {
        "id": "reading-106",
        "text": "1 Kings chapters 1-2",
        "marker": "history"
      },
      {
        "id": "reading-107",
        "text": "1 Kings chapters 3-5",
        "marker": "history"
      },
      {
        "id": "reading-108",
        "text": "1 Kings chapters 6-7",
        "marker": "history"
      },
      {
        "id": "reading-109",
        "text": "1 Kings chapter 8",
        "marker": "history"
      },
      {
        "id": "reading-110",
        "text": "1 Kings chapters 9-10",
        "marker": "history"
      },
      {
        "id": "reading-111",
        "text": "1 Kings chapters 11-12",
        "marker": "history"
      },
      {
        "id": "reading-112",
        "text": "1 Kings chapters 13-14",
        "marker": "history"
      },
      {
        "id": "reading-113",
        "text": "1 Kings chapters 15-17",
        "marker": "history"
      },
      {
        "id": "reading-114",
        "text": "1 Kings chapters 18-19",
        "marker": "history"
      },
      {
        "id": "reading-115",
        "text": "1 Kings chapters 20-21",
        "marker": "history"
      },
      {
        "id": "reading-116",
        "text": "1 Kings chapter 22",
        "marker": "history"
      },
      {
        "id": "reading-117",
        "text": "2 Kings chapters 1-3",
        "marker": "history"
      },
      {
        "id": "reading-118",
        "text": "2 Kings chapters 4-5",
        "marker": "history"
      },
      {
        "id": "reading-119",
        "text": "2 Kings chapters 6-8",
        "marker": "history"
      },
      {
        "id": "reading-120",
        "text": "2 Kings chapters 9-10",
        "marker": "history"
      },
      {
        "id": "reading-121",
        "text": "2 Kings chapters 11-13",
        "marker": "history"
      },
      {
        "id": "reading-122",
        "text": "2 Kings chapters 14-15",
        "marker": "history"
      },
      {
        "id": "reading-123",
        "text": "2 Kings chapters 16-17",
        "marker": "history"
      },
      {
        "id": "reading-124",
        "text": "2 Kings chapters 18-19",
        "marker": "history"
      },
      {
        "id": "reading-125",
        "text": "2 Kings chapters 20-22",
        "marker": "history"
      },
      {
        "id": "reading-126",
        "text": "2 Kings chapters 23-25",
        "marker": "history"
      },
      {
        "id": "reading-127",
        "text": "1 Chronicles chapters 1-2",
        "marker": null
      },
      {
        "id": "reading-128",
        "text": "1 Chronicles chapters 3-5",
        "marker": null
      },
      {
        "id": "reading-129",
        "text": "1 Chronicles chapters 6-7",
        "marker": null
      },
      {
        "id": "reading-130",
        "text": "1 Chronicles chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-131",
        "text": "1 Chronicles chapters 11-12",
        "marker": null
      },
      {
        "id": "reading-132",
        "text": "1 Chronicles chapters 13-15",
        "marker": null
      },
      {
        "id": "reading-133",
        "text": "1 Chronicles chapters 16-17",
        "marker": null
      },
      {
        "id": "reading-134",
        "text": "1 Chronicles chapters 18-20",
        "marker": null
      },
      {
        "id": "reading-135",
        "text": "1 Chronicles chapters 21-23",
        "marker": null
      },
      {
        "id": "reading-136",
        "text": "1 Chronicles chapters 24-26",
        "marker": null
      },
      {
        "id": "reading-137",
        "text": "1 Chronicles chapters 27-29",
        "marker": null
      },
      {
        "id": "reading-138",
        "text": "2 Chronicles chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-139",
        "text": "2 Chronicles chapters 4-6",
        "marker": null
      },
      {
        "id": "reading-140",
        "text": "2 Chronicles chapters 7-9",
        "marker": null
      },
      {
        "id": "reading-141",
        "text": "2 Chronicles chapters 10-14",
        "marker": null
      },
      {
        "id": "reading-142",
        "text": "2 Chronicles chapters 15-18",
        "marker": null
      },
      {
        "id": "reading-143",
        "text": "2 Chronicles chapters 19-22",
        "marker": null
      },
      {
        "id": "reading-144",
        "text": "2 Chronicles chapters 23-25",
        "marker": null
      },
      {
        "id": "reading-145",
        "text": "2 Chronicles chapters 26-28",
        "marker": null
      },
      {
        "id": "reading-146",
        "text": "2 Chronicles chapters 29-30",
        "marker": null
      },
      {
        "id": "reading-147",
        "text": "2 Chronicles chapters 31-33",
        "marker": null
      },
      {
        "id": "reading-148",
        "text": "2 Chronicles chapters 34-36",
        "marker": null
      }
    ]
  },
  {
    "title": "The Jews Return From Exile",
    "readings": [
      {
        "id": "reading-149",
        "text": "Ezra chapters 1-3",
        "marker": "history"
      },
      {
        "id": "reading-150",
        "text": "Ezra chapters 4-7",
        "marker": "history"
      },
      {
        "id": "reading-151",
        "text": "Ezra chapters 8-10",
        "marker": "history"
      },
      {
        "id": "reading-152",
        "text": "Nehemiah chapters 1-3",
        "marker": "history"
      },
      {
        "id": "reading-153",
        "text": "Nehemiah chapters 4-6",
        "marker": "history"
      },
      {
        "id": "reading-154",
        "text": "Nehemiah chapters 7-8",
        "marker": "history"
      },
      {
        "id": "reading-155",
        "text": "Nehemiah chapters 9-10",
        "marker": "history"
      },
      {
        "id": "reading-156",
        "text": "Nehemiah chapters 11-13",
        "marker": "history"
      },
      {
        "id": "reading-157",
        "text": "Esther chapters 1-4",
        "marker": "history"
      },
      {
        "id": "reading-158",
        "text": "Esther chapters 5-10",
        "marker": "history"
      }
    ]
  },
  {
    "title": "Job",
    "readings": [
      {
        "id": "reading-159",
        "text": "Job chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-160",
        "text": "Job chapters 6-9",
        "marker": null
      },
      {
        "id": "reading-161",
        "text": "Job chapters 10-14",
        "marker": null
      },
      {
        "id": "reading-162",
        "text": "Job chapters 15-18",
        "marker": null
      },
      {
        "id": "reading-163",
        "text": "Job chapters 19-20",
        "marker": null
      },
      {
        "id": "reading-164",
        "text": "Job chapters 21-24",
        "marker": null
      },
      {
        "id": "reading-165",
        "text": "Job chapters 25-29",
        "marker": null
      },
      {
        "id": "reading-166",
        "text": "Job chapters 30-31",
        "marker": null
      },
      {
        "id": "reading-167",
        "text": "Job chapters 32-34",
        "marker": null
      },
      {
        "id": "reading-168",
        "text": "Job chapters 35-38",
        "marker": null
      },
      {
        "id": "reading-169",
        "text": "Job chapters 39-42",
        "marker": null
      }
    ]
  },
  {
    "title": "Books of Songs and Practical Wisdom",
    "readings": [
      {
        "id": "reading-170",
        "text": "Psalms 1-8",
        "marker": null
      },
      {
        "id": "reading-171",
        "text": "Psalms 9-16",
        "marker": null
      },
      {
        "id": "reading-172",
        "text": "Psalms 17-19",
        "marker": null
      },
      {
        "id": "reading-173",
        "text": "Psalms 20-25",
        "marker": null
      },
      {
        "id": "reading-174",
        "text": "Psalms 26-31",
        "marker": null
      },
      {
        "id": "reading-175",
        "text": "Psalms 32-35",
        "marker": null
      },
      {
        "id": "reading-176",
        "text": "Psalms 36-38",
        "marker": null
      },
      {
        "id": "reading-177",
        "text": "Psalms 39-42",
        "marker": null
      },
      {
        "id": "reading-178",
        "text": "Psalms 43-47",
        "marker": null
      },
      {
        "id": "reading-179",
        "text": "Psalms 48-52",
        "marker": null
      },
      {
        "id": "reading-180",
        "text": "Psalms 53-58",
        "marker": null
      },
      {
        "id": "reading-181",
        "text": "Psalms 59-64",
        "marker": null
      },
      {
        "id": "reading-182",
        "text": "Psalms 65-68",
        "marker": null
      },
      {
        "id": "reading-183",
        "text": "Psalms 69-72",
        "marker": null
      },
      {
        "id": "reading-184",
        "text": "Psalms 73-77",
        "marker": null
      },
      {
        "id": "reading-185",
        "text": "Psalms 78-79",
        "marker": null
      },
      {
        "id": "reading-186",
        "text": "Psalms 80-86",
        "marker": null
      },
      {
        "id": "reading-187",
        "text": "Psalms 87-90",
        "marker": null
      },
      {
        "id": "reading-188",
        "text": "Psalms 91-96",
        "marker": null
      },
      {
        "id": "reading-189",
        "text": "Psalms 97-103",
        "marker": null
      },
      {
        "id": "reading-190",
        "text": "Psalms 104-105",
        "marker": null
      },
      {
        "id": "reading-191",
        "text": "Psalms 106-108",
        "marker": null
      },
      {
        "id": "reading-192",
        "text": "Psalms 109-115",
        "marker": null
      },
      {
        "id": "reading-193",
        "text": "Psalm 116 to Psalm 119:63",
        "marker": null
      },
      {
        "id": "reading-194",
        "text": "Psalm 119:64-176",
        "marker": null
      },
      {
        "id": "reading-195",
        "text": "Psalms 120-129",
        "marker": null
      },
      {
        "id": "reading-196",
        "text": "Psalms 130-138",
        "marker": null
      },
      {
        "id": "reading-197",
        "text": "Psalms 139-144",
        "marker": null
      },
      {
        "id": "reading-198",
        "text": "Psalms 145-150",
        "marker": null
      },
      {
        "id": "reading-199",
        "text": "Proverbs chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-200",
        "text": "Proverbs chapters 5-8",
        "marker": null
      },
      {
        "id": "reading-201",
        "text": "Proverbs chapters 9-12",
        "marker": null
      },
      {
        "id": "reading-202",
        "text": "Proverbs chapters 13-16",
        "marker": null
      },
      {
        "id": "reading-203",
        "text": "Proverbs chapters 17-19",
        "marker": null
      },
      {
        "id": "reading-204",
        "text": "Proverbs chapters 20-22",
        "marker": null
      },
      {
        "id": "reading-205",
        "text": "Proverbs chapters 23-27",
        "marker": null
      },
      {
        "id": "reading-206",
        "text": "Proverbs chapters 28-31",
        "marker": null
      },
      {
        "id": "reading-207",
        "text": "Ecclesiastes chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-208",
        "text": "Ecclesiastes chapters 5-8",
        "marker": null
      },
      {
        "id": "reading-209",
        "text": "Ecclesiastes chapters 9-12",
        "marker": null
      },
      {
        "id": "reading-210",
        "text": "Song of Solomon chapters 1-8",
        "marker": null
      }
    ]
  },
  {
    "title": "The Prophets",
    "readings": [
      {
        "id": "reading-211",
        "text": "Isaiah chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-212",
        "text": "Isaiah chapters 5-7",
        "marker": null
      },
      {
        "id": "reading-213",
        "text": "Isaiah chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-214",
        "text": "Isaiah chapters 11-14",
        "marker": null
      },
      {
        "id": "reading-215",
        "text": "Isaiah chapters 15-19",
        "marker": null
      },
      {
        "id": "reading-216",
        "text": "Isaiah chapters 20-24",
        "marker": null
      },
      {
        "id": "reading-217",
        "text": "Isaiah chapters 25-28",
        "marker": null
      },
      {
        "id": "reading-218",
        "text": "Isaiah chapters 29-31",
        "marker": null
      },
      {
        "id": "reading-219",
        "text": "Isaiah chapters 32-35",
        "marker": null
      },
      {
        "id": "reading-220",
        "text": "Isaiah chapters 36-37",
        "marker": null
      },
      {
        "id": "reading-221",
        "text": "Isaiah chapters 38-40",
        "marker": null
      },
      {
        "id": "reading-222",
        "text": "Isaiah chapters 41-43",
        "marker": null
      },
      {
        "id": "reading-223",
        "text": "Isaiah chapters 44-47",
        "marker": null
      },
      {
        "id": "reading-224",
        "text": "Isaiah chapters 48-50",
        "marker": null
      },
      {
        "id": "reading-225",
        "text": "Isaiah chapters 51-55",
        "marker": null
      },
      {
        "id": "reading-226",
        "text": "Isaiah chapters 56-58",
        "marker": null
      },
      {
        "id": "reading-227",
        "text": "Isaiah chapters 59-62",
        "marker": null
      },
      {
        "id": "reading-228",
        "text": "Isaiah chapters 63-66",
        "marker": null
      },
      {
        "id": "reading-229",
        "text": "Jeremiah chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-230",
        "text": "Jeremiah chapters 4-5",
        "marker": null
      },
      {
        "id": "reading-231",
        "text": "Jeremiah chapters 6-7",
        "marker": null
      },
      {
        "id": "reading-232",
        "text": "Jeremiah chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-233",
        "text": "Jeremiah chapters 11-13",
        "marker": null
      },
      {
        "id": "reading-234",
        "text": "Jeremiah chapters 14-16",
        "marker": null
      },
      {
        "id": "reading-235",
        "text": "Jeremiah chapters 17-20",
        "marker": null
      },
      {
        "id": "reading-236",
        "text": "Jeremiah chapters 21-23",
        "marker": null
      },
      {
        "id": "reading-237",
        "text": "Jeremiah chapters 24-26",
        "marker": null
      },
      {
        "id": "reading-238",
        "text": "Jeremiah chapters 27-29",
        "marker": null
      },
      {
        "id": "reading-239",
        "text": "Jeremiah chapters 30-31",
        "marker": null
      },
      {
        "id": "reading-240",
        "text": "Jeremiah chapters 32-33",
        "marker": null
      },
      {
        "id": "reading-241",
        "text": "Jeremiah chapters 34-36",
        "marker": null
      },
      {
        "id": "reading-242",
        "text": "Jeremiah chapters 37-39",
        "marker": null
      },
      {
        "id": "reading-243",
        "text": "Jeremiah chapters 40-42",
        "marker": null
      },
      {
        "id": "reading-244",
        "text": "Jeremiah chapters 43-44",
        "marker": null
      },
      {
        "id": "reading-245",
        "text": "Jeremiah chapters 45-48",
        "marker": null
      },
      {
        "id": "reading-246",
        "text": "Jeremiah chapters 49-50",
        "marker": null
      },
      {
        "id": "reading-247",
        "text": "Jeremiah chapters 51-52",
        "marker": null
      },
      {
        "id": "reading-248",
        "text": "Lamentations chapters 1-2",
        "marker": null
      },
      {
        "id": "reading-249",
        "text": "Lamentations chapters 3-5",
        "marker": null
      },
      {
        "id": "reading-250",
        "text": "Ezekiel chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-251",
        "text": "Ezekiel chapters 4-6",
        "marker": null
      },
      {
        "id": "reading-252",
        "text": "Ezekiel chapters 7-9",
        "marker": null
      },
      {
        "id": "reading-253",
        "text": "Ezekiel chapters 10-12",
        "marker": null
      },
      {
        "id": "reading-254",
        "text": "Ezekiel chapters 13-15",
        "marker": null
      },
      {
        "id": "reading-255",
        "text": "Ezekiel chapter 16",
        "marker": null
      },
      {
        "id": "reading-256",
        "text": "Ezekiel chapters 17-18",
        "marker": null
      },
      {
        "id": "reading-257",
        "text": "Ezekiel chapters 19-21",
        "marker": null
      },
      {
        "id": "reading-258",
        "text": "Ezekiel chapters 22-23",
        "marker": null
      },
      {
        "id": "reading-259",
        "text": "Ezekiel chapters 24-26",
        "marker": null
      },
      {
        "id": "reading-260",
        "text": "Ezekiel chapters 27-28",
        "marker": null
      },
      {
        "id": "reading-261",
        "text": "Ezekiel chapters 29-31",
        "marker": null
      },
      {
        "id": "reading-262",
        "text": "Ezekiel chapters 32-33",
        "marker": null
      },
      {
        "id": "reading-263",
        "text": "Ezekiel chapters 34-36",
        "marker": null
      },
      {
        "id": "reading-264",
        "text": "Ezekiel chapters 37-38",
        "marker": null
      },
      {
        "id": "reading-265",
        "text": "Ezekiel chapters 39-40",
        "marker": null
      },
      {
        "id": "reading-266",
        "text": "Ezekiel chapters 41-43",
        "marker": null
      },
      {
        "id": "reading-267",
        "text": "Ezekiel chapters 44-45",
        "marker": null
      },
      {
        "id": "reading-268",
        "text": "Ezekiel chapters 46-48",
        "marker": null
      },
      {
        "id": "reading-269",
        "text": "Daniel chapters 1-2",
        "marker": null
      },
      {
        "id": "reading-270",
        "text": "Daniel chapters 3-4",
        "marker": null
      },
      {
        "id": "reading-271",
        "text": "Daniel chapters 5-7",
        "marker": null
      },
      {
        "id": "reading-272",
        "text": "Daniel chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-273",
        "text": "Daniel chapters 11-12",
        "marker": null
      },
      {
        "id": "reading-274",
        "text": "Hosea chapters 1-7",
        "marker": null
      },
      {
        "id": "reading-275",
        "text": "Hosea chapters 8-14",
        "marker": null
      },
      {
        "id": "reading-276",
        "text": "Joel chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-277",
        "text": "Amos chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-278",
        "text": "Amos chapters 6-9",
        "marker": null
      },
      {
        "id": "reading-279",
        "text": "Obadiah/Jonah",
        "marker": null
      },
      {
        "id": "reading-280",
        "text": "Micah chapters 1-7",
        "marker": null
      },
      {
        "id": "reading-281",
        "text": "Nahum/Habakkuk",
        "marker": null
      },
      {
        "id": "reading-282",
        "text": "Zephaniah/Haggai",
        "marker": null
      },
      {
        "id": "reading-283",
        "text": "Zechariah chapters 1-7",
        "marker": null
      },
      {
        "id": "reading-284",
        "text": "Zechariah chapters 8-11",
        "marker": null
      },
      {
        "id": "reading-285",
        "text": "Zechariah chapters 12-14",
        "marker": null
      },
      {
        "id": "reading-286",
        "text": "Malachi chapters 1-4",
        "marker": null
      }
    ]
  },
  {
    "title": "Accounts of Jesus’ Life and Ministry",
    "readings": [
      {
        "id": "reading-287",
        "text": "Matthew chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-288",
        "text": "Matthew chapters 5-7",
        "marker": null
      },
      {
        "id": "reading-289",
        "text": "Matthew chapters 8-10",
        "marker": null
      },
      {
        "id": "reading-290",
        "text": "Matthew chapters 11-13",
        "marker": null
      },
      {
        "id": "reading-291",
        "text": "Matthew chapters 14-17",
        "marker": null
      },
      {
        "id": "reading-292",
        "text": "Matthew chapters 18-20",
        "marker": null
      },
      {
        "id": "reading-293",
        "text": "Matthew chapters 21-23",
        "marker": null
      },
      {
        "id": "reading-294",
        "text": "Matthew chapters 24-25",
        "marker": null
      },
      {
        "id": "reading-295",
        "text": "Matthew chapter 26",
        "marker": null
      },
      {
        "id": "reading-296",
        "text": "Matthew chapters 27-28",
        "marker": null
      },
      {
        "id": "reading-297",
        "text": "Mark chapters 1-3",
        "marker": "congregation"
      },
      {
        "id": "reading-298",
        "text": "Mark chapters 4-5",
        "marker": "congregation"
      },
      {
        "id": "reading-299",
        "text": "Mark chapters 6-8",
        "marker": "congregation"
      },
      {
        "id": "reading-300",
        "text": "Mark chapters 9-10",
        "marker": "congregation"
      },
      {
        "id": "reading-301",
        "text": "Mark chapters 11-13",
        "marker": "congregation"
      },
      {
        "id": "reading-302",
        "text": "Mark chapters 14-16",
        "marker": "congregation"
      },
      {
        "id": "reading-303",
        "text": "Luke chapters 1-2",
        "marker": null
      },
      {
        "id": "reading-304",
        "text": "Luke chapters 3-5",
        "marker": null
      },
      {
        "id": "reading-305",
        "text": "Luke chapters 6-7",
        "marker": null
      },
      {
        "id": "reading-306",
        "text": "Luke chapters 8-9",
        "marker": null
      },
      {
        "id": "reading-307",
        "text": "Luke chapters 10-11",
        "marker": null
      },
      {
        "id": "reading-308",
        "text": "Luke chapters 12-13",
        "marker": null
      },
      {
        "id": "reading-309",
        "text": "Luke chapters 14-17",
        "marker": null
      },
      {
        "id": "reading-310",
        "text": "Luke chapters 18-19",
        "marker": null
      },
      {
        "id": "reading-311",
        "text": "Luke chapters 20-22",
        "marker": null
      },
      {
        "id": "reading-312",
        "text": "Luke chapters 23-24",
        "marker": null
      },
      {
        "id": "reading-313",
        "text": "John chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-314",
        "text": "John chapters 4-5",
        "marker": null
      },
      {
        "id": "reading-315",
        "text": "John chapters 6-7",
        "marker": null
      },
      {
        "id": "reading-316",
        "text": "John chapters 8-9",
        "marker": null
      },
      {
        "id": "reading-317",
        "text": "John chapters 10-12",
        "marker": null
      },
      {
        "id": "reading-318",
        "text": "John chapters 13-15",
        "marker": null
      },
      {
        "id": "reading-319",
        "text": "John chapters 16-18",
        "marker": null
      },
      {
        "id": "reading-320",
        "text": "John chapters 19-21",
        "marker": null
      }
    ]
  },
  {
    "title": "Growth of the Christian Congregation",
    "readings": [
      {
        "id": "reading-321",
        "text": "Acts chapters 1-3",
        "marker": "congregation"
      },
      {
        "id": "reading-322",
        "text": "Acts chapters 4-6",
        "marker": "congregation"
      },
      {
        "id": "reading-323",
        "text": "Acts chapters 7-8",
        "marker": "congregation"
      },
      {
        "id": "reading-324",
        "text": "Acts chapters 9-11",
        "marker": "congregation"
      },
      {
        "id": "reading-325",
        "text": "Acts chapters 12-14",
        "marker": "congregation"
      },
      {
        "id": "reading-326",
        "text": "Acts chapters 15-16",
        "marker": "congregation"
      },
      {
        "id": "reading-327",
        "text": "Acts chapters 17-19",
        "marker": "congregation"
      },
      {
        "id": "reading-328",
        "text": "Acts chapters 20-21",
        "marker": "congregation"
      },
      {
        "id": "reading-329",
        "text": "Acts chapters 22-23",
        "marker": "congregation"
      },
      {
        "id": "reading-330",
        "text": "Acts chapters 24-26",
        "marker": "congregation"
      },
      {
        "id": "reading-331",
        "text": "Acts chapters 27-28",
        "marker": "congregation"
      }
    ]
  },
  {
    "title": "The Letters of Paul",
    "readings": [
      {
        "id": "reading-332",
        "text": "Romans chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-333",
        "text": "Romans chapters 4-7",
        "marker": null
      },
      {
        "id": "reading-334",
        "text": "Romans chapters 8-11",
        "marker": null
      },
      {
        "id": "reading-335",
        "text": "Romans chapters 12-16",
        "marker": null
      },
      {
        "id": "reading-336",
        "text": "1 Corinthians chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-337",
        "text": "1 Corinthians chapters 7-10",
        "marker": null
      },
      {
        "id": "reading-338",
        "text": "1 Corinthians chapters 11-14",
        "marker": null
      },
      {
        "id": "reading-339",
        "text": "1 Corinthians chapters 15-16",
        "marker": null
      },
      {
        "id": "reading-340",
        "text": "2 Corinthians chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-341",
        "text": "2 Corinthians chapters 7-10",
        "marker": null
      },
      {
        "id": "reading-342",
        "text": "2 Corinthians chapters 11-13",
        "marker": null
      },
      {
        "id": "reading-343",
        "text": "Galatians chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-344",
        "text": "Ephesians chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-345",
        "text": "Philippians chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-346",
        "text": "Colossians chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-347",
        "text": "1 Thessalonians chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-348",
        "text": "2 Thessalonians chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-349",
        "text": "1 Timothy chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-350",
        "text": "2 Timothy chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-351",
        "text": "Titus/Philemon",
        "marker": null
      },
      {
        "id": "reading-352",
        "text": "Hebrews chapters 1-6",
        "marker": null
      },
      {
        "id": "reading-353",
        "text": "Hebrews chapters 7-10",
        "marker": null
      },
      {
        "id": "reading-354",
        "text": "Hebrews chapters 11-13",
        "marker": null
      }
    ]
  },
  {
    "title": "The Writings of the Other Apostles and Disciples",
    "readings": [
      {
        "id": "reading-355",
        "text": "James chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-356",
        "text": "1 Peter chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-357",
        "text": "2 Peter chapters 1-3",
        "marker": null
      },
      {
        "id": "reading-358",
        "text": "1 John chapters 1-5",
        "marker": null
      },
      {
        "id": "reading-359",
        "text": "2 John/3 John/Jude",
        "marker": null
      },
      {
        "id": "reading-360",
        "text": "Revelation chapters 1-4",
        "marker": null
      },
      {
        "id": "reading-361",
        "text": "Revelation chapters 5-9",
        "marker": null
      },
      {
        "id": "reading-362",
        "text": "Revelation chapters 10-14",
        "marker": null
      },
      {
        "id": "reading-363",
        "text": "Revelation chapters 15-18",
        "marker": null
      },
      {
        "id": "reading-364",
        "text": "Revelation chapters 19-22",
        "marker": null
      }
    ]
  }
];
