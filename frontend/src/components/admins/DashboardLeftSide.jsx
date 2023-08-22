import React from "react";
import { NavLink } from "react-router-dom";

const DashboardLeftSide = () => {
    return(
        <div className="leftSide">
            <div>
                <nav>
                    <NavLink className='my-2' to="/admins/dashboard/users">Users</NavLink>
                    <NavLink className='my-2' to="/admins/dashboard/shoes">Shoes</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default DashboardLeftSide;