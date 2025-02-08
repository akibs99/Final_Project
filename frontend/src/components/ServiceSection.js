import React, { useEffect, useState } from "react";
import "./ServiceSection.css"; // Add styling later

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://your-api-url.com/services") // Replace with real API
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service-section">
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSection;
