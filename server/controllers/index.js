const db = require("../models");

const Appointment = db.appointments;

// Create and save a new appointment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  // Create a new appointment
  const appointment = new Appointment({
    name: req.body.name,
    date: req.body.description,
    time: req.body.time,
    reason: req.body.reason
  });

  // Save the appointment in the database
  appointment
    .save(appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the appointment."
      });
    });
};

// Retrieve all appointments from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Tutorial.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find an appointment with id
exports.findOne = (req, res) => {

};

// Update an appointment by id in request
exports.update = (req, res) => {

};

// Delete an appointment with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all appointments from the database
exports.deleteAll = (req, res) => {

};
