const mongoose = required ("mongoose")
const proposalschema = new mongoose.Schema({
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    proposalText: { type: String },
    proposedBudget: { type: Number },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
} ,{timestamp : true})
const Proposal = mongoose.model("Proposal" , proposalschema);
module.exports(Proposal);