import React from "react";
import "./DeleteButton.css";

const DeleteButton = props => (
    <span className="btn btn-danger" {...props}>Delete</span>
);

export default DeleteButton;