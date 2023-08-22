import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartIcon = () => {
    const shoesCart = useSelector(store => store.shoesCart);
    return(
        <NavLink className="cartIcon" to='/cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{shoesCart.length}</span>
        </NavLink>
    )
}

export default CartIcon;