// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

import { Post, User } from "./models";
import { connectDB } from "./utils";
import {unstable_noStore as noStore } from "next/cache";

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    console.log(post)
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts")
  }
};

export const getPost = async ({ slug }) => {
  try {
    connectDB();
    const post = await Post.findOne({slug});
    console.log(post)
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts with id " + slug)
  }
};

export const getUser = async (id) => {
  noStore()
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user with id " + id);
  }
};

export const getAllUsers = async (id) => {
  try {
    connectDB();
    const user = await User.find();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users")
  }
};
