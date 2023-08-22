import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const ItemCard = ({shoe}) => {
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

    useEffect(()=>{
        if(savedShoes.length > 0){
            const isS = savedShoes.some(sv => sv.shoe_id === shoe.id);
            setIsSaved(isS);
        }
    },  [])

    return(
        <div className="item">
            <img src={`/shoes_img/${shoe.imgPath}`} alt="" />
            <div>
                <i onClick={()=>handleSave()} className={isSaved ? 'fa-solid fa-heart text-danger' : 'fa-regular fa-heart'}></i>
                <p>{shoe.title}</p>
                <p><i className="fa-solid fa-star" style={{color:"gold"}}></i> <span>{shoe.rating}</span></p>
                <p>{shoe.price} DH</p>
                <NavLink to={`/shoes/show/${shoe.id}`}>show</NavLink>
            </div>
        </div>
    )
}

export default ItemCard;