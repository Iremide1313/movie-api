import express from "express";
import {
    deleteMovie,
    createMovies,
    getMovie,
    getMovies,
    updateMovie,
} from "../controllers/movie.js";
import { validateAdmin, validateRequest } from "../middleware/validate.js";
const router = express.Router();

// GET/api/v1/movies: retrieve all movies
router.get("/", getMovies)

// GET/api/v1/movies/:id: retrieve a specific movie
router.get("./:id", getMovie)

//POST/api/v1/movies : create a movie
router.post("/", validateAdmin, createMovies)

//PUT/api/v1/movies/:id : to update a movie\
router.put("./:id", validateAdmin, updateMovie)

//DELETE/api/v1/movies/:id : to delete a movie
router.delete("./:id", validateAdmin, deleteMovie)

export { router as movieRouter};