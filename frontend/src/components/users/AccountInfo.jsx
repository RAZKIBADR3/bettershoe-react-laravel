import React, { useEffect, useRef } from "react";
import AccountLeftSide from "./AccountLeftSide";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AccountInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const navigate = useNavigate();
    const name = useRef('');
    const checkIsAuthenticated = () => {
        if(!isAuthenticated){
            navigate('/users/login')
        }
    }

    const handleName = (input) => {
        name.current = input.value;
    }

    const changeName = async () => {
        if(name.current){
            try{
                const res = await axios.put(`http://localhost:8000/api/users/update/${user.id}/${name.current}`);
                if(res.data.success){
                    const user1 = JSON.stringify(res.data.user);
                    window.localStorage.user = user1;
                    dispatch( {type:'setUser', payload:{user: res.data.user}} );
                    alert('name updated successfully');
                }
            }catch(err){
                console.log(err.message);
            }
        }else{
            alert('field name is required');
        }
    }

    useEffect(()=>{
        checkIsAuthenticated();

        if(user!=null){
            name.current = user.name;
        }
    }, [])
    return(
        <div className="content">
            <AccountLeftSide />
            {user!=null 
                &&
                <div className="rightSide p-4">
                    <div style={{width: '200px'}} className="profilePicP p-3 my-2 border d-flex flex-column align-items-center">
                        <div>
                            <p className="text-capitalize my-2">profile picture : </p>
                            <img src={`/users_img/${user.profile.profilePic != null ? user.profile.profilePic : 'no-img.jpg'}`} style={{height: '150px'}} className="rounded-circle my-2" alt="profile pic" />
                        </div>
                        <button className="btn bg-dark py-1 px-2 text-light text-capitalize">Update Profile Picture</button>
                    </div>
                    <div className="p-3 border my-2">
                        <p> Name : </p>
                        <div style={{width: '200px'}} className="d-flex">
                            <input onChange={(event)=>handleName(event.target)} type="text" name="name" defaultValue={user.name} placeholder="new name.." className="form-control p-2 col-6" />
                            <button onClick={()=>changeName()} className="btn bg-dark text-light text-capitalize col-5">Update</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AccountInfo;