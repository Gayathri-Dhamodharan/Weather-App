import { db } from "../lib/db"; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { userId } = req.query;

    const query =
      "SELECT * FROM search_history WHERE user_id = ? ORDER BY timestamp DESC";

    try {
      const [results] = await db.execute(query, [userId]); 
      res.status(200).json(results);
    } catch (err) {
      console.error("Error fetching search history:", err);
      res.status(500).json({ message: "Error retrieving search history" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
