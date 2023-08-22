import React, {useEffect, useRef } from "react";
import ShoesInCart from "./ShoesInCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const user = useSelector(store => store.user);
    const shoesCart = useSelector(store => store.shoesCart);
    const total = useSelector(store => store.total);

    const cart = useRef({fullname:'', adresse:'', phone:'', paymentMethod:'cash on delivery'})
    
    useEffect(()=>{
        dispatch( {type:'setTotal'} );
    }, [shoesCart, dispatch]);

    const handleInput = (input) => {
        cart.current[input.name] = input.value;
    }

    const handleCart = async (event) => {
        event.preventDefault();
        if(isAuthenticated){
            const { fullname, adresse, phone, paymentMethod } = cart.current;
            if (paymentMethod && fullname && adresse && phone) {
                if(shoesCart.length > 0){
                    try{
                        const data = {
                            cart : {...cart.current, total , user_id : user.id},
                            cart_det : shoesCart
                        }
                        const res = await axios.post('http://localhost:8000/api/carts/store' , data);
                        if(res.data.success){
                            dispatch( {type:'setShoesCart', payload:{data:[]}} );
                            alert('order completed successfully');
                        }
                    }catch(err){
                        console.log(err.message);
                    }
                }else{
                    alert('the cart is empty');
                }
            }else{
                alert('all fields are required');
            }
        }else{
            navigate('/users/login');
        }
    }

    return(
        <div className="content">
            <div className="shopCart">
                    <div className="left">
                    <h2 className='my-2'>Orders</h2>
                    <hr className='my-4 text-dark'/>
                        <div className="carts">
                            {
                                shoesCart.length > 0
                                ?   <ShoesInCart />
                                :   <p className='emprty'>No Shoes Order Yet</p>
                            }
                        </div>
                    </div>
                    <div className="right p-4">
                        <h4 className='my-3 ps-2'>Order Summary</h4>
                        <hr className='my-3' />
                        <form onSubmit={(event)=>handleCart(event)} method="post">
                            <p className='m-0'>Payment method</p>
                            <select onChange={(event)=>handleInput(event.target)} name="paymentMethod" className="form-select">
                                <option value='cash on delivery' className="text-capitalize">cash on delivery</option>
                                <option value='credit card' className="text-capitalize" disabled>credit card payment('not available for now')</option>
                            </select>
                            <p className='m-0 mt-2'>Full Name</p>
                            <input onChange={(event)=>handleInput(event.target)} name='fullname' type='text' className='form-control' placeholder='user' />
                            <p className='m-0 mt-2'>Adresse</p>
                            <input onChange={(event)=>handleInput(event.target)} name='adresse' type='text' className='form-control' placeholder='adresse' />
                            <p className='m-0 mt-2'>Phone Number</p>
                            <input onChange={(event)=>handleInput(event.target)} name='phone' type='tel' className='form-control' placeholder='+212-6..' />
                            <p className='my-4 fw-semibold'>Total : {total} DH</p>
                            <input type='submit' value='Order'/>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Cart;