import React, { useEffect } from "react";
import DashboardLeftSide from "./DashboardLeftSide";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const navigate = useNavigate();
    const checkIsAuthenticated = () => {
        if(!isAuthenticated || user.role !== 'admin') navigate('/users/login')
    }
    useEffect(()=>{
        checkIsAuthenticated();
    }, [])

    return(
        <div className="content">
            <DashboardLeftSide />
            <div className="rightSide">
                <h3 className="p-5 m-4">
                    Welcome admin to the Dashboard section !
                </h3>
            </div>
        </div>
    )
}

export default Dashboard;