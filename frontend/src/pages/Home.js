import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data.slice(0, 6)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section>
        <h2>Latest Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
