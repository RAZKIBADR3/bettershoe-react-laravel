import React from "react";
import { NavLink } from "react-router-dom";

const Leftside = () => {
    return(
        <div className="leftSide">
            <div>
                <h3>category</h3>
                <nav>
                    <NavLink to="/categories/sport">sport</NavLink>
                    <NavLink to="/categories/casual">casual</NavLink>
                </nav>
            </div>

            <div>
                <h3>gender</h3>
                <nav>
                    <NavLink to="/genders/men">men</NavLink>
                    <NavLink to="/genders/women">women</NavLink>
                </nav>
            </div>

            <div>
                <h3>brand</h3>
                <nav>
                    <NavLink to="/brands/timberland">timberland</NavLink>
                    <NavLink to="/brands/nike">nike</NavLink>
                    <NavLink to="/brands/vans">vans</NavLink>
                    <NavLink to="/brands/adidas">adidas</NavLink>
                    <NavLink to="/brands/converse">converse</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Leftside;