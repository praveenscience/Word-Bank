// Import Express JS.
const express = require("express");
const session = require("express-session");
// Import Routes.
const rootRoute = require("./routes/root");
const apiRoute = require("./routes/api");
// Create an Express Instance.
const app = express();
// Set a port.
const port = 3100;
// Read the body for post.
app.use(express.json());
// Enabling Sessions Support
const sess = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {}
};
// Only if production, enable secure cookies and trust proxy.
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));
// Routing.
app.use("/", rootRoute);
app.use("/api", apiRoute);
// Listen the application to the port.
app.listen(port, () => {
  console.log(`Server started in Port ${port}!`);
});
