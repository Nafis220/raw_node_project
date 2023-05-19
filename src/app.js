const express = require("express");

const app = express();
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
