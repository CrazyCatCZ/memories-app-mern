import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (page) => {
  try {
    const { data } = await api.fetchPosts(page);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchPost = createAsyncThunk("posts/fetchPost", async (id) => {
  try {
    const { data } = await api.fetchPost(id);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchPostsBySearch = createAsyncThunk(
  "posts/search",
  async (searchQuery) => {
    try {
      const { data } = await api.fetchPostsBySearch(searchQuery);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  try {
    const { formData } = post;
    const { data } = await api.createPost(formData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ formData }) => {
    try {
      const { data } = await api.updatePost(formData);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    await api.deletePost(_id);

    return _id;
  } catch (error) {
    console.log(error.message);
  }
});

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (likedPost) => {
    try {
      const { data } = await api.likePost(likedPost);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const commentPost = createAsyncThunk(
  "posts/commentPost",
  async (commentData) => {
    try {
      const { data } = await api.commentPost(commentData);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
