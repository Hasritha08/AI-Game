const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://samarpaninfotech1221:A4hqkMUW7RYF9R3u@quotation.ofzfp.mongodb.net/top";
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    const db = client.db("top_trumps");

    // Drop database
    await db.dropDatabase();
    console.log("Database dropped!");

    // Insert football data
    await db.collection("football").insertMany([
      { name: "Hernan Crespo", height: 184, caps: 20, goals: 10 },
      { name: "Francesco Totti", height: 180, caps: 24, goals: 5 },
      { name: "Luis Figo", height: 180, caps: 70, goals: 21 }
    ]);

    // Insert simpsons data
    await db.collection("simpsons").insertMany([
      { name: "Principal Skinner", most_lovable: 74, smartest: 74, fattest: 64, biggest_nerd: 60, greatest_anarchist: 48, walk_of_fame: 71, image: "./images/skinner.jpeg" },
      { name: "Groundskeeper Willie", most_lovable: 74, smartest: 48, fattest: 70, biggest_nerd: 66, greatest_anarchist: 80, walk_of_fame: 92, image: "./images/willie.jpeg" },
      { name: "Milhouse Van Houten", most_lovable: 78, smartest: 48, fattest: 74, biggest_nerd: 88, greatest_anarchist: 68, walk_of_fame: 66, image: "./images/milhouse.jpeg" },
      { name: "Santa's Little Helper", most_lovable: 96, smartest: 44, fattest: 74, biggest_nerd: 60, greatest_anarchist: 50, walk_of_fame: 51, image: "./images/santaslittlehelper.jpeg" },
      { name: "Krusty the Clown", most_lovable: 70, smartest: 86, fattest: 92, biggest_nerd: 54, greatest_anarchist: 86, walk_of_fame: 76, image: "./images/krusty.jpeg" },
      { name: "Martin", most_lovable: 80, smartest: 80, fattest: 90, biggest_nerd: 70, greatest_anarchist: 72, walk_of_fame: 83, image: "./images/martin.jpeg" },
      { name: "Patty & Selma Bouvier", most_lovable: 50, smartest: 90, fattest: 86, biggest_nerd: 50, greatest_anarchist: 92, walk_of_fame: 15, image: "./images/pattyselma.jpeg" },
      { name: "Sherri and Terri", most_lovable: 54, smartest: 82, fattest: 58, biggest_nerd: 76, greatest_anarchist: 66, walk_of_fame: 10, image: "./images/sherri&terri.jpeg" }
    ]);

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seedDatabase();
