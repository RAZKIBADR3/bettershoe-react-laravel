import React, { useEffect } from "react";
import DashboardLeftSide from "./DashboardLeftSide";
import axios from "axios";
import Spinner from "../../partials/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DashboardSheos = () => {
    const dispatch = useDispatch();
    const shoes = useSelector(store=>store.shoes);
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const navigate = useNavigate();
    const checkIsAuthenticated = () => {
        if(!isAuthenticated || user.role !== 'admin') navigate('/users/login')
    }

    const handleDelete = async (shoe_id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this shoe?');
        if(confirmDelete){
            try{
                const res = await axios.delete(`http://localhost:8000/api/shoes/destroy/${shoe_id}`);
                const {success, shoes} = res.data;
                if(success){
                    dispatch( {type:'setShoes', payload:{shoes}} )
                }
            }catch(err){
                console.log(err.message);
            }
        }
    }

    useEffect(()=>{
        checkIsAuthenticated();
    }, [])
    
    return(
        <div className="content dashboardShoes">
            <DashboardLeftSide />
            <div className="rightSide">
                <table style={{width: '95%'}} className="table table-hover mx-auto my-5">
                    <thead className="text-muted">
                        <tr>
                            <td>#</td>
                            <td>image</td>
                            <td>title</td>
                            <td>gender</td>
                            <td>price</td>
                            <td>color</td>
                            <td>brand</td>
                            <td>actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {shoes == null
                            ?   <tr><td colSpan={8}><Spinner/></td></tr>
                            :   shoes.map( shoe =>
                                <tr key={shoe.id}>
                                    <td>{shoe.id}</td>
                                    <td>
                                        {shoe.imgPath == null 
                                            ?   <i className="fa-solid fa-circle-user"></i>
                                            :   <img src={`/shoes_img/${shoe.imgPath}`} alt="shoes ima" />
                                        }
                                    </td>
                                    <td>{shoe.title}</td>
                                    <td>{shoe.gender}</td>
                                    <td>{shoe.price}</td>
                                    <td>{shoe.color}</td>
                                    <td>{shoe.brand.title}</td>
                                    <td><input onClick={()=>handleDelete(shoe.id)} className="delete" type="button" value='Delete' /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardSheos;