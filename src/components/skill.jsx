import React from 'react';

function Skill({ skillName, percentage }) {
  return (
    <div>
      <span className="fs-5">{skillName}</span>
      <span className="float-end fw-bold">{percentage}%</span>
      <div className="progress">
        <div className="progress-bar" role="progressbar" 
        style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
}

export default Skill;