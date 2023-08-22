import React from "react";
import { NavLink } from "react-router-dom";

const AccountLeftSide = () => {
    return(
        <div className="leftSide">
            <div>
                <h3>Order</h3>
                <nav>
                    <NavLink className='my-2' to="/users/account/carts">myOrders</NavLink>
                </nav>
            </div>

            <div>
                <h3>Settings</h3>
                <nav>
                    <NavLink className='my-2' to="/users/account/info">personnel information</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default AccountLeftSide;