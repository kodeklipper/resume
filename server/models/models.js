module.exports = mongoose => {
  const Appointment = mongoose.model(
    "appointment",
    mongoose.Schema(
      {
        name: String,
        date: String,
        time: String,
        reason: String
      },
      { timestamps: true }
    )
  );

  return Appointment;
};
