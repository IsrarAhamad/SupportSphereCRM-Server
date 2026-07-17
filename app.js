const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/test.route.js");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const ticketRoutes = require("./routes/ticket.route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tickets", ticketRoutes);


module.exports = app;