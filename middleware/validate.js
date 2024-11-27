export const validateRequest = (req, res, next) => {
    const {title, director, releasedYear} = req.body;
    if ( !title ||!director || !releasedYear){
        return res.json(404) ({message: "title, director, releasedYear are required"})
    }
    next();
};

export const validateAdmin = (req, res, next) => {
    const {adminName, password, role: adminId} = req.body;
    if(!adminName || !password, role){
        return res.json(404) ({message: "not authorised for user"})
    }
    next ();
};