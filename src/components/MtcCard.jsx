import React from "react";
import "../css/mtc.css";

function MtcCard({ member }) {
  return (
    <div className="card">
      {member.name === "Harmain Munir" ? (
        <img src={member.img} alt={member.name} className="HarmainImg" />
      ) : (
        <img src={member.img} alt={member.name} className="card-img"/>
      )}
      <div className="card-content">
        <h2>{member.name}</h2>
        <h3>{member.role}</h3>
        <p>
          Class of {member.classOf} <br />
          {member.bio}
        </p>
        <a href={member.linkedin}>LinkedIn</a>
      </div>
    </div>
  );
}

export default MtcCard;
