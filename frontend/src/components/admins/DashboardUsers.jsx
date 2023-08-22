import React, { useEffect, useState } from "react";
import DashboardLeftSide from "./DashboardLeftSide";
import axios from "axios";
import Spinner from "../../partials/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardUsers = () => {
    const [users, setUsers] = useState(null);
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const navigate = useNavigate();
    const checkIsAuthenticated = () => {
        if(!isAuthenticated || user.role !== 'admin') navigate('/users/login')
    }

    const handleBlock = async (user_id) => {
        const confirmblock = window.confirm('Are you sure you want to block this account?');
        if(confirmblock){
            try{
                const res = await axios.put(`http://localhost:8000/api/users/block/${user_id}`);
                if(res.data.success){
                    setUsers(res.data.users);
                }
            }catch(err){
                console.log(err.message);
            }
        }
    }

    useEffect(()=>{
        checkIsAuthenticated();

        // users
        axios.get('http://localhost:8000/api/users')
        .then(res => setUsers(res.data))
        .catch(err => console.error(err))
    }, [])

    return(
        <div className="content dashboardUsers">
            <DashboardLeftSide />
            <div className="rightSide">
                <table style={{width: '95%'}} className="table table-striped table-hover mx-auto my-5">
                    <thead className="text-muted">
                        <tr>
                            <td>#</td>
                            <td>Pic</td>
                            <td>name</td>
                            <td>birthay</td>
                            <td>email</td>
                            <td>actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users == null
                            ?   <tr><td colSpan={6}><Spinner/></td></tr>
                            :   users.map( user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>
                                        <img src={`/users_img/${user.profile.profilePic != null ? user.profile.profilePic : 'no-img.jpg'}`} alt="profile_pic" />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.birthday}</td>
                                    <td>{user.email}</td>
                                    <td><input onClick={()=>handleBlock(user.id)} type="button" value='Block' /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardUsers;