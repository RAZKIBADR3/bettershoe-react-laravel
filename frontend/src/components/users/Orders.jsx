import React, { useEffect, useState } from "react";
import AccountLeftSide from "./AccountLeftSide";
import axios from "axios";
import Spinner from "../../partials/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const checkIsAuthenticated = () => {
        if(!isAuthenticated){
            navigate('/users/login')
        }
    }
    
    const [carts, setCarts] = useState(null);
    useEffect(()=>{
        checkIsAuthenticated();

        // carts
        axios.get(`http://localhost:8000/api/users/carts/${user.id}`)
        .then(res => setCarts(res.data))
        .catch(err => console.error(err))
    }, [])

    return(
        <div className="content">
            <AccountLeftSide />
            <div className="rightSide">
                {carts==null
                    ?   <Spinner/>
                    :   (carts.length===0 
                            ?   <p className="text-center p-4 text-center">No orders yet</p>
                            :   carts.map( cart => 
                                <div key={cart.id} style={{width: '95%'}} className="cart mx-auto p-4 my-4 border">
                                    <p className="my-3 text-muted"># {cart.id}</p>
                                    <p className="my-2">fullname : {cart.fullname}</p>
                                    <p className="my-2">adresse : {cart.adresse}</p>
                                    <p className="my-2">phone : {cart.phone}</p>
                                    <p className="my-2">payment method : {cart.paymentMethod}</p>
                                    <p className="my-2">Order total : {cart.total}</p>
                                    <table className="table table-striped table-hover my-2">
                                        <thead className="text-muted">
                                            <tr>
                                                <td>#</td>
                                                <td>Shoe total</td>
                                                <td>quantity</td>
    
                                                <td>img</td>
                                                <td>title</td>
                                                <td>price</td>
                                                <td>brand</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.cart_det == null
                                                ?   <tr><td colSpan={7}><Spinner/></td></tr>
                                                :   cart.cart_det.map( cart_det =>
                                                        <tr key={cart_det.id}>
                                                            <td>{cart_det.id}</td>
                                                            <td>{cart_det.total}</td>
                                                            <td>{cart_det.qt}</td>
                                                            <td>
                                                            <Link to={`/shoes/show/${cart_det.shoe.id}`}>
                                                                <img style={{height: '80px'}} src={`/shoes_img/${cart_det.shoe.imgPath}`} alt="shoe" />
                                                            </Link>
                                                            </td>
                                                            <td>{cart_det.shoe.title}</td>
                                                            <td>{cart_det.shoe.price}</td>
                                                            <td>{cart_det.shoe.brand.title}</td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        )
                        )
                }
            </div>
        </div>
    )
}

export default Orders;