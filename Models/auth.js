import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const authSchema = new mongoose.Schema(
    { 
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    


    },
);
const userAuth = mongoose.model("userAuth", authSchema);
export default userAuth;