const express = require("express");

const {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  addNote,
} = require("../controllers/ticket.controller.js");

const protect = require("../middleware/auth.middleware.js");

const router = express.Router();

router.post("/", protect, createTicket);

router.get("/", protect, getAllTickets);

router.get("/:ticketId", protect, getSingleTicket);

router.put("/:ticketId", protect, updateTicket);

router.post("/:ticketId/notes", protect, addNote);

module.exports = router;