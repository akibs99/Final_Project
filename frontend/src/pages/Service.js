import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Service;
