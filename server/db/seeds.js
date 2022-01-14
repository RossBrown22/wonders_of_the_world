use wonders_db;
db.dropDatabase();

db.wonders.insertMany([
    {
        name: "Petra",
        location: "Jordan",
        facts: ["It was discovered by Swiss explorer Johann Ludwig Burckhardt in 1812.",
                "Some archaeologists believed it to be a temple, while others thought it was a place to store documents.", 
                "The city is nicknamed Rose city because it is carved from pink coloured rock."],
        funFact: "Inside, the high rock walls reach 262 feet into the air which is the equivalent to 14 giraffe on top of each other)",
        collection: "new"
    },
    {
        name: "Great Wall",
        location: "China",
        facts: ["The wall was built the 7th century, putting the wall at almost 3,000 years old.",
                "It took almost 2000 years to build and rebuild the wall."],
        funFact: "The total length of all sections of the Great Wall of China adds up to about 13,171 miles, which is the equivalent to 439 elephants from tail to trunk",
        collection: "new"
    },
    {
        name: "Christ the Redeemer",
        location: "Brazil",
        facts: ["Began construction in 1926 and was completed in 1931.", "It was made with 6 million soapstone tiles."],
        funFact: "It stands at 98 feet tall, which is the same length as a Boeing 737 Aeroplane!",
        collection: "new"
    },
    {
        name: "Colosseum",
        location: "Italy",
        facts: ["Built in the 1st century", "6 million people visiting it each year."],
        funFact: "Was originally used for gladiators to see who was the strongest fighter!",
        collection: "new"
    },
    {
        name: "Machu Pichu",
        location: "Peru",
        facts: ["Discovered by the western world in 1911.", "The Incan City is believed to have been inhabited in the 1600s."],
        funFact: "Located at an altitude of 2400 meters which is the equivalent to 524 double decker buses!",
        collection: "new"
    },
    {
        name: "Chichen Itza",
        location: "Mexico",
        facts: ["Dates back to the 9th century.", "The main pyramid nests multiple smaller pyramids inside it"],
        funFact: "The Great Pyramid also has 365 steps, which is 24 times the amount of an average house!",
        collection: "new"
    },
    {
        name: "Taj Mahal",
        location: "India",
        facts: ["It was completed in 1658 by Emperor Shah Jahn who built it for his wife.", "Became one of the 7 wonders in 2007 (after being voted by the public)", "In order to protect the Taj Mahal from the harmful effects of pollution, all motor vehicles MUST stay 500 meters away."],
        funFact: "In 1600 it cost 314 million pounds to build - which in 2022 is the equivalent to 3 billion, 579 million pounds!!",
        collection: "new"
    }
])