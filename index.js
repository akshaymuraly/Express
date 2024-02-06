const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());
app.get("/api", (req, res, next) => {
  res.json({ name: "dbhbdhbshb" });
});

app.post("/api", (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  return res.json({ message: "delivered!" });
});

app.listen(5000, () => console.log("Listening...."));
