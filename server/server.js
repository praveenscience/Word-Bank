// Import Express JS.
const express = require("express");
// Import Routes.
const rootRoute = require("./routes/root");
const apiRoute = require("./routes/api");
// Create an Express Instance.
const app = express();
// Set a port.
const port = 3100;
// Read the body for post.
app.use(express.json());
// Routing.
app.use("/", rootRoute);
app.use("/api", apiRoute);
// Listen the application to the port.
app.listen(port, () => {
  console.log(`Server started in Port ${port}!`);
});
