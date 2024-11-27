import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema (
    {
        reviewerName: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"movie",
            required: true
        },
    
    },
    {timestamp: true }
);
const Review = mongoose.model("Review", reviewSchema);
export default Review;