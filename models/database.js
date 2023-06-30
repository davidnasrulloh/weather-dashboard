const massive = require("massive");

let db;

const getDB = async ({ NODE_ENV }) => {
  if (db) return db;

  try {
    if (NODE_ENV !== "production") {
      db = await massive({
        host: "127.0.0.1",
        port: 5432,
        database: "weather_dashboard",
        user: "postgres",
        password: "david",
      });
    } else {
      db = await massive({
        connectionString: process.env.DATABASE_URL,
      });
    }
    console.log("Database connected");
    return db;
  } catch (error) {
    console.log(error);
    console.log("Database not connected");
    return null;
  }
};

module.exports = getDB;
