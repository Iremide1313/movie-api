import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 10
        },
        reviews: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
            },
        ],
    },
    {timestamp: true}

);

const Movie = mongoose.model("Movie", movieSchema );
export default Movie;