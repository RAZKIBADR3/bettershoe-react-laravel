import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ShowShoeCard = ({shoe}) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const savedShoes = useSelector(store => store.savedShoes)
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = async () => {
        if(isAuthenticated){
            if(!isSaved){
                try{
                    const res = await axios.post('http://localhost:8000/api/savedShoes/store', {user_id: user.id, shoe_id: shoe.id})
                    if(res.data.success){
                        setIsSaved(true);
                        dispatch( {type:'setSavedShoes', payload:{data:res.data.savedShoes}} )
                    }
                }catch(e){
                    console.log(e.message);
                }
            }else{
                try{
                    const res = await axios.delete(`http://localhost:8000/api/savedShoes/destroy/${shoe.id}/${user.id}`)
                    if(res.data.success){
                        setIsSaved(false);
                        dispatch( {type:'setSavedShoes', payload:{data:res.data.savedShoes}} )
                    }
                }catch(e){
                    console.log(e.message);
                }
            }
        }else{
            navigate('/users/login');
        }
    }

    const AddToCart = () => {
        dispatch( {type:'addShoeToCart', payload:{shoe:shoe}} );
    }
    
    useEffect(()=>{
        if(savedShoes.length > 0){
            const isS = savedShoes.some(sv => sv.shoe_id === shoe.id);
            setIsSaved(isS);
        }
    },  [])

    return(
        <div className="shoeCard">
            <div>
            <i onClick={()=>handleSave()} className={isSaved ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart'}></i>
                <img src={`/shoes_img/${shoe.imgPath}`} alt="" />
            </div>
            <div>
                <h2>{shoe.title}</h2>
                <Link to={`/genders/${shoe.gender}`} className="nav-link fs-5 p-0">{shoe.gender}</Link>
                <p>Stock : {shoe.qtStock}</p>
                <p>Brand : <Link to={`/brands/${shoe.brand.title}`}>{shoe.brand.title}</Link></p>
                <p>category : <Link to={`/categories/${shoe.category.title}`}>{shoe.category.title}</Link></p>
                <p><i className="fa-solid fa-star" style={{color:"gold"}}></i> <span>{shoe.rating}</span></p>
                <p>Color : <span className="mx-2 px-3 py-1 rounded-circle" style={{backgroundColor:`${shoe.color}`}}></span></p>
                <p> {shoe.price} DH</p>
                <button onClick={()=>AddToCart()}>Add To Cart</button>
                {/* <i className="fa-solid fa-heart"></i> */}
            </div>
        </div>
    )
}

export default ShowShoeCard;