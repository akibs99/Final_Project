import React, { useEffect, useState } from "react";
import "./TeamSection.css"; // Add styling later

const TeamSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://your-api-url.com/team") // Replace with real API
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <ul>
        {team.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamSection;
