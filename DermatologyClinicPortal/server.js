require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const appointmentRoutes = require("./routes/appointmentRoutes");
const { sendTextConfirmation } = require("./twilioService");

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Example route for booking an appointment
app.post("/api/appointments/book", async (req, res) => {
  const { name, phone, date, time } = req.body;

  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Simulating appointment booking (Replace with actual DB logic)
    const appointment = { name, phone, date, time };

    // Send text confirmation
    await sendTextConfirmation(name, phone, date, time);

    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    res.status(500).json({ error: "Failed to send SMS confirmation." });
  }
});

app.get("/", (req, res) => {
  res.send("Appointment Booking API is running.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
