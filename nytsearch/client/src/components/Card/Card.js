import React from "react";
import "./Card.css";

const Card = ({children}) => (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{children}</h3>
            <p className="card-text">{children}</p>
            <a href="/" className="btn btn-primary">GO to the article</a>
        </div>
    </div>
);

export default Card;