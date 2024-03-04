import React from "react";


function Card({ name, description, image, github, deployed }) {
  return (
    <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
      <div className="card mt-3 effect">
        <img src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={deployed} className="btn btn-primary" target="_blank">
            App
          </a>
          <a href={github} className="btn btn-primary" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;