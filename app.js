const express = require("express");
const cors = require("cors");

const testRoutes = require("./routes/test.route");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const ticketRoutes = require("./routes/ticket.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tickets", ticketRoutes);


module.exports = app;