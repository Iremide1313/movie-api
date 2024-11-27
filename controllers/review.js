import Movie from "../Models/movie.js";
import Review from "../Models/reviews.js";

// post api/v1/movie/:movieId/reviews

export const addReview = async(req, res) => {
    try {
        const {movieId} = req.params;
        const review = await Review.create(req.body);
        const movie = await Movie.findByIdAndUpdate(
            movieId,
            {$push: { reviews: review._id }},
            { new: true}
        );
        res.status(201).json({ message: "Review added", review});
    } catch (error) {
        return res.status(501).json({error: error.message})
    }
};

// GET api/v1/movies/:movieid/reviews
export const getMoviesReviews = async (req, res) => {
    try {
        const {movieId} = req.params;
        const movie = await Movie.findById(movieId).populate("reviews");
        res. status(200).json(movie.reviews);

        if(!movie) {
            return res.status(404).json({message: "movie not found" });

        }
    }catch (error) {
        return res.status(501).json ({ error: error.message});
    }
};

// DELETE api/v1/movies/:movieId/reviews/:reviewId

export const deleteReview = async( req, res) =>{
    try {
        const { movieId, reviewId} = req.params;
        const review = await Review.findByIdAndDelete(reviewId);
        await Movie.findByIdAndUpdate(movieId, {$pull: {reviews: reviewId }});
        res.status(200).json({ message: "Review deleted successfully" });

        if (!review) return res
        .status(404).json({message: "review not found"});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};
