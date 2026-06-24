const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  status: {
    type: String,
    enum: ["To Do", "In Progress", "Testing", "Completed"],
    default: "To Do",
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  history: [
    {
      status: String,
      changedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Task", taskSchema);