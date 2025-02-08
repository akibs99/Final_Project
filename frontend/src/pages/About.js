import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/team")
      .then((res) => setTeam(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <h2>Meet the Team</h2>
      {team.map((member) => (
        <div key={member._id}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
