const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reviewee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String }
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
