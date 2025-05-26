import { useState } from "react";
import { PostContext } from "../context/postContext";
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
        setNews(allPosts);
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
    <PostContext.Provider value={{ news, addNews, }}>
      {children}
    </PostContext.Provider>
  );
}
