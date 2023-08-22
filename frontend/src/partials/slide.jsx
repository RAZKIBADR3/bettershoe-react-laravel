import React from "react";
import { NavLink } from "react-router-dom";

const Slide = () => {
    return(
        <div className="slideP">
            <div className="slides">
                <div style={{backgroundImage: `url('bg/1.jpg')`}} className="slide">
                    <h1>you deserve better with timberland</h1>
                    <NavLink className="btn" to="/brands/timberland">Discover</NavLink>
                </div>

                <div style={{backgroundImage: `url('bg/2.jpg')`}} className="slide">
                    <h1 className="text-light">just do it with Nike</h1>
                    <NavLink className="btn" to="/brands/nike">Discover</NavLink>
                </div>

                <div style={{backgroundImage: `url('bg/3.jpg')`}} className="slide">
                    <h1>are you ready for <span style={{color:"#FD7B00"}}>Vans</span></h1>
                    <NavLink className="btn" to="/brands/vans">Discover</NavLink>
                </div>

                <div style={{backgroundImage: `url('bg/4.jpg')`}} className="slide">
                    <h1 className="text-light">the quality with adidas</h1>
                    <NavLink className="btn" to="/brands/adidas">Discover</NavLink>
                </div>

                <div style={{backgroundImage: `url('bg/5.jpg')`}} className="slide">
                    <h1 className="text-light">the elegance with converse</h1>
                    <NavLink className="btn" to="/brands/converse">Discover</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Slide;