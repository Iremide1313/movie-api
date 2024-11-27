import mongoose from "mongoose";

const userSchema = new mongoose.schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            minlength: 8,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",

        },
    },
    {timestamp: true}
);

const User = mongoose.model("User", UserSchema);
export default User;