const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: String, required: true },
    skill: { type: String, required: true }
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
