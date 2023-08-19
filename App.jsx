import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
