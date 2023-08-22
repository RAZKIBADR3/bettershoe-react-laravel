import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const UserIcon = () => {
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [displayDiv, setDisplayDiv] = useState(false);
    const routes = [
        {id:0, name:'account', route:'/users/account', isAuthenticated: true},
        {id:1, name:'saved shoes', route:'/savedShoes', isAuthenticated: true},
        {id:2, name:'login', route:'/users/login', isAuthenticated: false},
        {id:3, name:'logOut', isAuthenticated: true},
        {id:4, name:'register', route:'/users/register', isAuthenticated: null}
    ]

    const handleLogOut = async () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if(confirmLogout){
            try{
                await axios.post('http://localhost:8000/api/users/logout');
                dispatch( {type:'logout'} )
                Cookies.remove('token' ,{ sameSite: 'none', secure: true });
                localStorage.removeItem('user');
                navigate('/');
            }catch(err){
                console.log(err.message);
            }
        }
    }
    return(
        <div className="userIcon">
            {   !isAuthenticated
                ?   <i className="fa-solid fa-circle-user" onClick={()=>setDisplayDiv(displayDiv === false ? true : false)}></i>
                :   <img src={`/users_img/${user.profile.profilePic != null ? user.profile.profilePic : 'no-img.jpg'}`} alt="" onClick={()=>setDisplayDiv(displayDiv === false ? true : false)}/>
            }
            <div className={displayDiv===true ? 'open' : ''}>
                {routes.map( r =>
                    (isAuthenticated === r.isAuthenticated || r.isAuthenticated == null)
                    &&
                    (
                        r.name === 'logOut'
                        ?   <span onClick={()=>handleLogOut()} key={r.id}>{r.name}</span>
                        :   <NavLink key={r.id} to={r.route} onClick={()=>setDisplayDiv(false)}>{r.name}</NavLink> 
                    ) 
                )}
            </div>
        </div>
    )
}

export default UserIcon;