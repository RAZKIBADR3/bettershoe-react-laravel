import React, { useEffect } from "react";
import AccountLeftSide from "./AccountLeftSide";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated)
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
        <div className="content">
            <AccountLeftSide />
            <div className="rightSide">
                <h3 className="p-5 m-4">
                    {user!=null
                        &&  `Welcome ${user.name} to the Account section !`
                    }
                </h3>
            </div>
        </div>
    )
}

export default Account;