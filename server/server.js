// Import Express JS.
const express = require("express");
// Create an Express Instance.
const app = express();
// Set a port.
const port = 3100;
// Listen the application to the port.
app.listen(port, () => {
  console.log(`Server started in Port ${port}!`);
});
