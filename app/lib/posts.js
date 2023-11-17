import mongoose from "mongoose";
import { posts } from "./models";
import { connectToDatabase } from "./mongodb";

export const getPosts = async () => {
    try {
        await connectToDatabase()
        const allExistingPosts = await posts.find({});
        return allExistingPosts.map((post) => {
            return {
                id: post._id.toString(),
                title: post.title,
                content: post.content,
            };
        })
    }
    catch (error) {
        console.log({ getPostsError: error });
        return error
    }
};

export const getPost = async (id) => {
    try {
        await connectToDatabase()
        const post = await posts.findOne({
            _id: new mongoose.Types.ObjectId(id),
        });
        const newPost = {}
        newPost.id = post._id.toString()
        newPost.title = post.title
        newPost.content = post.content
        return newPost;
    }
    catch (error) {
        console.log({ getPostbyIdError: error });
        return error
    }
}

export const addPost = async (title, content) => {
    try {
        await connectToDatabase()
        const post = new posts({
            title,
            content
        })
        await post.save()
    }
    catch (error) {
        console.log({ addPostError: error });
        return error
    }
}

export const editPost = async (id, title, content) => {
    try {
        await connectToDatabase()
        await posts.findByIdAndUpdate(id, { title, content });
    }
    catch (error) {
        console.log({ editPostError: error });
        return error
    }
}

export const deletePost = async (id) => {
    try {
        await connectToDatabase()
        await posts.findOneAndDelete({
            _id: new mongoose.Types.ObjectId(id),
        });
    }
    catch (error) {
        console.log({ deletePostError: error });
        return error
    }
}