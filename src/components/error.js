import React from 'react'

import { Link } from "gatsby";

import Logo_b from "../icons/SVG/balls_pink_1.svg";

const error = () => {
    return (
        <div className="container">
            <div className="errorpage">
            <h2>404 page not found :((</h2>
                <p>return to main page via logo</p>
                <Link to="/"><Logo_b /></Link>
            </div>
        </div>
    )
}

export default error
