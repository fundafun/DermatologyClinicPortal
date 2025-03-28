const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Create an appointment
router.post("/", async (req, res) => {
  try {
    const { patientName, email, phone, date, time } = req.body;

    // Validate input
    if (!patientName || !email || !phone || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({ patientName, email, phone, date, time });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment", error });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

// Update an appointment
router.put("/:id", async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment) return res.status(404).json({ message: "Appointment not found" });
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error updating appointment" });
  }
});

// Delete an appointment
router.delete("/:id", async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ message: "Appointment not found" });
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment" });
  }
});

module.exports = router;
