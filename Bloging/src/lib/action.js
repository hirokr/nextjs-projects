"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectDB } from "./utils";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectDB();
    const newPost = new Post({ title, desc, slug, userId, img });
    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { msg: "some thing went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();
    await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { msg: "some thing went wrong" };
  }
};

export const addUser = async (previousState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);
  try {
    connectDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });
    await newUser.save();
    console.log("Saved to DB");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "some thing went wrong" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User deleted successfully");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { msg: "some thing went wrong" };
  }
};

export const handleGithubLogin = async (e) => {
  "use server";
  await signIn("github");
};

export const handleGithubLogout = async (e) => {
  "use server";
  await signOut();
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
    return { success: true };
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const register = async (previousState, fromData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(fromData);

  if (passwordRepeat !== password) {
    return { error: "Passwords do not match" };
  }
  try {
    connectDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("Saved to DB");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "some thing went wrong" };
  }
};