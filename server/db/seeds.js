use wonders_db;
db.dropDatabase();

db.wonders.insertMany([
    {
        name: "Petra",
        location: "Jordan",
        facts: ["It was discovered by Swiss explorer Johann Ludwig Burckhardt in 1812.",
                "Some archaeologists believed it to be a temple, while others thought it was a place to store documents.", 
                "The city is nicknamed Rose city because it is carved from pink coloured rock."],
        funFact: "Inside, the high rock walls reach 262 feet into the air, which is the equivalent to 14 giraffe standing on top of each other).",
        collection: "new",
        image: "Petra.jpeg"
    },
    {
        name: "Great Wall",
        location: "China",
        facts: ["The wall was built in the 7th century, putting the wall at almost 3,000 years old.",
                "It took almost 2000 years to build and maintain the wall.", "It was built for kingdom defenses, to defend China's northern border, and also for tourism."],
        funFact: "The total length of all sections of the Great Wall of China adds up to about 13,171 miles, which is the equivalent to 439 elephants from tail to trunk.",
        collection: "new",
        image: "GreatWall.jpeg"
    },
    {
        name: "Christ the Redeemer",
        location: "Brazil",
        facts: ["It began construction in 1926 and was completed in 1931.", "It was made with 6 million soapstone tiles.", "It was requested that the statue be built so it would be visible from anywhere and everywhere in Rio de Janeiro."],
        funFact: "It stands at 98 feet tall, which is the same length as a Boeing 737 Aeroplane!",
        collection: "new",
        image: "ChristtheRedeemer.jpeg"
    },
    {
        name: "Colosseum",
        location: "Italy",
        facts: ["It was built in the 1st century.", "6 million people visiting it each year.", "It only took nine years to build!"],
        funFact: "It was originally used for gladiators to see who was the strongest fighter!",
        collection: "new",
        image: "Colosseum.jpeg"
    },
    {
        name: "Machu Pichu",
        location: "Peru",
        facts: ["It was discovered by the western world in 1911.", "The Incan City is believed to have been inhabited in the 1600s.", "It was built to serve as a royal retreat, although its purpose is ultimately unknown."],
        funFact: "It is located at an altitude of 2400 meters, which is the equivalent to 524 double decker buses!",
        collection: "new",
        image: "MachuPicchu.jpeg"
    },
    {
        name: "Chichen Itza",
        location: "Mexico",
        facts: ["It dates back to the 9th century.", "The main pyramid nests multiple smaller pyramids inside it.", "Originally it became an important commercial centre, trading in goods - including gold and other treasures."],
        funFact: "The Great Pyramid also has 365 steps, which is 24 times the amount of an average house!",
        collection: "new",
        image: "ChichenItza.jpeg"
    },
    {
        name: "Taj Mahal",
        location: "India",
        facts: ["It was completed in 1658 by Emperor Shah Jahn who built it for his wife.", "Became one of the 7 wonders in 2007, (after being voted by the public).", "In order to protect the Taj Mahal from the harmful effects of pollution, all motor vehicles MUST stay 500 meters away."],
        funFact: "In 1600 it cost 314 million pounds to build - which in 2022 is the equivalent to 3 billion, 579 million pounds!",
        collection: "new",
        image: "TajMahal.jpeg"
    },
    {
        name: "Great Pyramid of Giza",
        location: "Egypt",
        facts: ["It is more than five thousand years old.", "It's estimated that it took well more than two million stone blocks to make.", "It was built for a pharaoh (King) named Khufu."],
        funFact: "When it was built it was 481 feet tall, however because of erosion, it is now 455 feet tall!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Hanging Gardens of Babylon",
        location: "Iraq",
        facts: ["The gardens were thought to be about 75 feet high.", "They were built when King Nebuchadnezzar The Second was in power in Babylon.", "The plants did not actually hang. They grew from many different levels of terraces (similar to balconies)."],
        funFact: "It would have taken 8,200 gallons of water each day to keep the plants watered. Which is roughly the same as 18,500, 2 litres bottles!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Temple of Artemis",
        location: "Turkey",
        facts: ["The temple was burnt down by Herostratus, as he believed it would 'make him famous'.", "It was used as a house of worship to Artemis and as well as a marketplace.", "The remains of the structure were first discovered in 1869 by John Turtle Wood."],
        funFact: "It may have been the first ever building which was constructed of Marble!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Statue of Zeus",
        location: "Greece",
        facts: ["It was made by the Greek sculptor Phidias around 435 BC.", "The statue was built with ivory plates and gold panels on a wooden framework.", "Zeus was the sky and thunder god in ancient Greek religion."],
        funFact: "The statue was so tall, that if Zeus was to 'stand up', the roof would fall off the temple!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Mausoleum At Halicarnassus",
        location: "Turkey",
        facts: ["Construction was finished around 350 BC.", "At the very top, there was a large statue of Mausolus and Artemisia in a chariot pulled by four horses.", "It was mainly built using white marble."],
        funFact: "Almost 19 centuries after it was completed, the Mausoleum was destroyed by earthquakes in the 1300s!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Colossus of Rhodes",
        location: "Island of Rhodes",
        facts: ["It was a symbol of strength and freedom for the people of Rhodes.", "There are rumours that a new Colossus may be built at Rhodes Harbour at some point in the future.", "Historians believe that 900 camels were used to carry away all the scrap metal."],
        funFact: "It was 108 feet tall, which is nearly the same height as the Statue of Liberty!",
        collection: "ancient",
        image: ""
    },
    {
        name: "Lighthouse of Alexandria",
        location: "Egypt",
        facts: ["The top of the tower had a mirror that reflected sunlight during the day.", "It was among the tallest man-made structures on Earth for many centuries.", "It was sadly destroyed by earthquakes."],
        funFact: "It has also been known to be called Pharos, meaning 'lighthouse' in some languages!",
        collection: "ancient",
        image: ""
    }
])