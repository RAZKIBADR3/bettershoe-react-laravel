import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../partials/Spinner";

const SavedShoes = () => {
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const savedShoes = useSelector(store => store.savedShoes);
    const navigate = useNavigate();
    const checkIsAuthenticated = () => {
        if(!isAuthenticated){
            navigate('/users/login')
        }
    }
    useEffect(()=>{
        checkIsAuthenticated();
    }, [])

    return(
        <div className="content savedShoes flex-column">
            <p className="m-4 text-muted fs-5 fw-semibold">Saved shoes :</p>
            <table style={{width: '95%'}} className="table table-hover mx-auto my-2">
                    <thead className="text-muted">
                        <tr>
                            <td>#</td>
                            <td>image</td>
                            <td>title</td>
                            <td>gender</td>
                            <td>price</td>
                            <td>color</td>
                            <td>brand</td>
                        </tr>
                    </thead>
                    <tbody>
                        {savedShoes == null
                            ?   <tr><td colSpan={8}><Spinner/></td></tr>
                            :   (savedShoes.length === 0 
                                    ?   <tr><td colSpan={8} className="text-center p-4">No Saved Shoes</td></tr> 
                                    :   savedShoes.map( savedShoe =>
                                        <tr key={savedShoe.id}>
                                            <td>{savedShoe.shoe.id}</td>
                                            <td>
                                                <Link to={`/shoes/show/${savedShoe.shoe.id}`}>
                                                    <img src={`/shoes_img/${savedShoe.shoe.imgPath}`} alt="shoe" />
                                                </Link>
                                            </td>
                                            <td>{savedShoe.shoe.title}</td>
                                            <td>{savedShoe.shoe.gender}</td>
                                            <td>{savedShoe.shoe.price}</td>
                                            <td>{savedShoe.shoe.color}</td>
                                            <td>{savedShoe.shoe.brand.title}</td>
                                        </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default SavedShoes;