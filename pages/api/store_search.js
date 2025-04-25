import { db } from "../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, city, temperature, latitude, longitude, timeSpent } =
      req.body;

    const query = `
      INSERT INTO search_history (user_id, city, temperature, latitude, longitude, time_spent, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      userId,
      city,
      temperature,
      latitude,
      longitude,
      timeSpent,
      new Date(),
    ];

    try {
      await db.execute(query, values); // Execute the query
      res.status(200).json({ message: "Search data stored successfully" });
    } catch (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ message: "Error storing search data" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
