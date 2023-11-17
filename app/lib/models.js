import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        min: 3,
        max: 120,
    },
    content: {
        type: String,
        trim: true,
        required: true,
        min: 3,
    },
}, {
    timestamps: true
})

export const posts = mongoose.models.posts || mongoose.model("posts", postsSchema)