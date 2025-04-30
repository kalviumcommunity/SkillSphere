const mongoose = require("mongoose");
const proposalSchema = new mongoose.Schema({
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    proposalText: { type: String },
    proposedBudget: { type: Number },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

const Proposal = mongoose.model("Proposal", proposalSchema);
module.exports = Proposal;