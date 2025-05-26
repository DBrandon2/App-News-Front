import { useState } from "react";
import { PostContext } from "../context/PostContext";
import { useEffect } from "react";
import { getPostsByUser } from "../apis/post.api";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function PostProvider({ children }) {
  const [news, setNews] = useState([]);
  const { user } = useContext(AuthContext);

  const addNews = (newPost) => {
    setNews([...news, newPost]);
  };

  useEffect(() => {
    console.log(news);
    const getNews = async () => {
      try {
        const allPosts = await getPostsByUser(user);
        const sortedPosts = allPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNews(sortedPosts);
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getNews();
    }
  }, [user]);

  return (
    <PostContext.Provider value={{ news, addNews }}>
      {children}
    </PostContext.Provider>
  );
}
