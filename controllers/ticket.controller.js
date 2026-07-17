const Ticket = require("../models/ticket.model.js");
const Note = require("../models/note.model.js");

const createTicket = async (req, res) => {
  try {
    const { customerName, customerEmail, subject, description } = req.body;

    if (!customerName || !customerEmail || !subject || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const ticket = await Ticket.create({
      customerName,
      customerEmail,
      subject,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      ticket,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


const getAllTickets = async (req, res) => {
  try {
    const { search, status } = req.query;

    let query = {};

    // Search
    if (search) {
      query.$or = [
        { customerName: { $regex: search, $options: "i" } },
        { customerEmail: { $regex: search, $options: "i" } },
        { ticketId: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by Status
    if (status) {
      query.status = status;
    }

    const tickets = await Ticket.find(query)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tickets.length,
      tickets,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =========================
// Get Single Ticket + Notes
// =========================
const getSingleTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await Ticket.findOne({ ticketId })
      .populate("createdBy", "name email");

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    const notes = await Note.find({
      ticket: ticket._id,
    })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      ticket,
      notes,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =========================
// Update Ticket Status
// =========================
const updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;

    const validStatus = ["Open", "In Progress", "Closed"];

    if (!validStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const ticket = await Ticket.findOne({ ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.status = status;

    await ticket.save();

    res.status(200).json({
      success: true,
      message: "Ticket updated successfully",
      ticket,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// =========================
// Add Note
// =========================
const addNote = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Note is required",
      });
    }

    const ticket = await Ticket.findOne({ ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    const newNote = await Note.create({
      ticket: ticket._id,
      note,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      note: newNote,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  addNote,
};
