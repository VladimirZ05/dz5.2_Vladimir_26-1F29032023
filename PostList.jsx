import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
