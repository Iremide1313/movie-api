import Movie from "../Models/movie.js";
import auth from "../Models/auth.js";

app.use(express.json());

app.post("/register", async( req, res)=> {
    const {userName, password, role:adm, user } = req.body;
    const saltRounds = await bycrpt.genSalt(10);
    const harshedPassword = await bycrpt.hash({password, saltRounds});

    const newUser = await user.create({userName, password: harshedPassword });
    res.status(201).json({message: "user created", newUser});

});

app.post("/login", async (req, res) => {
    const { userName, password } = req.body
    const user = await user.findOne ({ userName });

    const ispassword = await bcrypt.compare(password, user.password);

    const token = jwt.sign ({ id: user._id },"abcde", {
        expiresIn: "3m",
    });

    res.status(200).json({ message: "login successful", token });
    

    if (!userName || !password){
        return res.status(404).json({ message: "invalid username and password"});
    }
});
