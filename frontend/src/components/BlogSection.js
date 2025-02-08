import React, { useEffect, useState } from "react";
import "./BlogSection.css"; // Add styling later

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://your-api-url.com/blogs") // Replace with real API
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 6))); // Show 6 blogs
  }, []);

  return (
    <div className="blog-section">
      <h2>Latest Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSection;
