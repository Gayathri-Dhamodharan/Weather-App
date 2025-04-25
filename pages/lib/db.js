const pool = mysql.createPool({
  host: "localhost", 
  user: "root",
  password: "root",
  database: "weatherapp", 
});

export const db = pool.promise(); 
