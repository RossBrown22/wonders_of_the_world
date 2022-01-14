use wonders_db;
db.dropDatabase();

db.wonders.insertMany([
    {
        name: "Petra",
        location: "Jordan",
        facts: ["It was discovered by Swiss explorer Johann Ludwig Burckhardt in 1812.",
                "some archaeologists believed it to be a temple, while others thought it was a place to store documents.", 
                "The city is nicknamed Rose city because it is carved from pink coloured rock."],
        funFact: "Inside, the high rock walls reach 262 feet into the air. (14 giraffe on top of each other)",
        collection: "new"
    }
])