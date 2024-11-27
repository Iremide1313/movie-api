import Movie from "../Models/movie.js";

export const createMovies = async (req, res)=> {
    try {
        const newMovie = await movieRouter.create(req.body);
        res.status(200).json({data: newMovie, message: "movie created" });

    }catch (error) {
        console.log(error);
        res.status(500).json ({error: error.message});

    }
};

export const getMovies = async (req, res)=> {
    try {
        const { title, releasedYear } = req.query;

        const filter = {};
        if (title) {
            filter.title = { $regex: title, $options: "i"};

        }

        if (releasedYear) {
            filter.releasedYear = number(releasedYear);
            
        }

        const movie = await movieRouter.find(filter).populate("reviews");
        res.status(200).json({data:books, message: "reviewed" });
    }catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }
};

export const getMovie = async(req, res) =>{
    try {
        const movie = await movie.findById(req.params.id).populate("reviews");
        if(!movie){
            return res.status(404)
            .json({message: `movie with ${req.params.id} not found` });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json ({error:error.message})
    }
};
export const updateMovie = async (req, res) =>{
    try {
        const movie = await movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!movie) {
            return res.status(404).json({message: `movie ${req.params.id} not found`});
        }
        res.status(200).json({movie, message: "movie updated" });

    }catch (error) {
        res.status(500).json({error: error.message})
    }
};
export const deleteMovie = async( req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({_id: req.params.id});
        res.status(200).json({movie, message: "Movie deleted" });
        
        if(!movie){
            return res.status(404).json ({message: `movie with ${req.params.id} not found`});
        }
    } catch(error){
        res.status(500)
        .json({error: error.message });
    }
};
