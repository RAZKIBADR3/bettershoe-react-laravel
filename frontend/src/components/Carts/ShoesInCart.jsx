import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShoesInCart = () => {
    const dispatch = useDispatch();
    const shoesCart = useSelector(store => store.shoesCart);

    const deleteShoe = (shoe) => {
        dispatch( {type:'deleteShoeFromCart', payload:{id:shoe.id}} )
    }
    
    const increment = (shoe) => {
        dispatch( {type:'increment', payload:{shoe:shoe}} )
    }
    
    const decrement = (shoe) => {
        dispatch( {type:'decrement', payload:{shoe:shoe}} )
    };

    return(
        <>
            <div className="att">
                <span>Order Details</span>
                <span>gender</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
            </div>
            {shoesCart.map(shoe=>
                <div key={shoe.id} className="cart">
                    <span>
                        <Link to={`/shoes/show/${shoe.id}`}>
                            <img src={`/shoes_img/${shoe.imgPath}`} alt="shoe" />
                        </Link>
                        <div>
                            <p className='m-0'>{shoe.title}</p>
                            <p onClick={()=>deleteShoe(shoe)} className='m-0 remove text-danger'>delete</p>
                        </div>
                    </span>
                    <span>{shoe.gender}</span>
                    <span>
                        <button onClick={()=>decrement(shoe)}>-</button>
                        <p className='m-0'>{shoe.quantity}</p>
                        <button onClick={()=>increment(shoe)}>+</button>
                    </span>
                    <span className='fw-semibold'>{shoe.price} DH</span>
                    <span className='fw-semibold'>{shoe.total} DH</span>
                </div>
            )}
        </>
    )
}

export default ShoesInCart;