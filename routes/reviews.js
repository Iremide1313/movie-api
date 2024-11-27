import express from "express"

import {
    addReview,
    getMoviesReviews,
    deleteReview,
} from "../controllers/review.js";
const router = express.Router();

//POST/api/v1/movies/:id/reviews
router.post("/movies/:movieId/review", addReview )

//GET/api/v1/movies/:id/reviews
router.get("/movies/:moviesId/reviews", getMoviesReviews)

//DELETE/api/v1/movies/:moviesid/reviews:reviewId
router.delete("/movies/:movieId/reviews/:reviewId", deleteReview);

export { router as reviewRouter};