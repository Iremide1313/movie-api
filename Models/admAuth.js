import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authSchema = new mongoose.Schema(
    {
        adminName: {
            type: String,
            required: true,
        },
        adminId: {
            type: Number,
            required: true,
        },
        password: {
            type: string,
            required: true,
        },
    
    },
);

const adminAuth = mongoose.model("adminAuth", authSchema );
export default adminAuth;