import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));


    return (
        <div>
            <h1>Color Factory</h1>
            <h1>
                <Link to="/colors/new">Add A Color</Link>
            </h1>

            <p>Select A Color</p>
            <ul>{colorLinks}</ul>
        </div>
    );
}


export default ColorList;