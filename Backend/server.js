const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({text : "Hello from Node.js backend!"});
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
