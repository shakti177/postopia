import { createContext, useState, useContext } from "react";
import {
  apiCreatePost,
  apiDeletePost,
  apiFetchPost,
  apiFetchPostByCategory,
  apiFetchPostByUser,
  apiFetchPosts,
  apiPostThumbnail,
  apiUpdatePost,
} from "../api/postServices";

const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  const createPost = async (formData) => {
    setLoading(true);
    setError(null);
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await apiCreatePost(formData, accessToken);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchPosts();
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPost = async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchPost(postId);
      setPost(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (postId, postData) => {
    setLoading(true);
    setError(null);
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await apiUpdatePost(postId, postData, accessToken);
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, ...response.data } : post
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (postId) => {
    setLoading(true);
    setError(null);
    const accessToken = localStorage.getItem("accessToken");
    try {
      await apiDeletePost(postId, accessToken);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchPostByCategory(category);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const postThumbnail = async (thumbnailData, postId) => {
    setLoading(true);
    setError(null);
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await apiPostThumbnail(
        thumbnailData,
        postId,
        accessToken
      );
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, ...response.data } : post
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchByUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchPostByUser(userId);
      setPosts(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <postContext.Provider
      value={{
        posts,
        post,
        loading,
        error,
        createPost,
        fetchPosts,
        fetchPost,
        updatePost,
        deletePost,
        fetchByCategory,
        postThumbnail,
        fetchByUser,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export const usePost = () => {
  return useContext(postContext);
};
