import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(store => store.isAuthenticated)
    const checkIsAuthenticated = () => {
        if(isAuthenticated === true) {
            navigate('/');
        }
    }
    useEffect(()=>{
        checkIsAuthenticated();
    })

    const [error, setError] = useState('');
    const data = useRef({email:'', password:''});

    const handleInput = (input) => {
        data.current[input.name] = input.value;
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/api/users/login', data.current)
            const {token, user, success, savedShoes} = res.data;
            if(success){
                dispatch( {type:'setIsAuthenticated', payload:{case: true}} )
                
                const user1 = JSON.stringify(user);
                window.localStorage.user = user1;
                dispatch( {type:'setUser', payload:{user}} );

                dispatch({type:'setSavedShoes', payload:{data:savedShoes}})
                Cookies.set('token', token , {expires: 10, sameSite: 'none', secure: true });
                navigate('/');
            }else{
                setError('this account is blocked, you cannot acccess this account');
            }
        }catch(e){
            setError('the combination of email and password is invalid')
            console.log(e.message);
        }
    }

    return(
        <div style={{height: '90vh'}} className="content flex-column justify-content-center">
            <form onSubmit={(event)=>handleLogin(event)} method="post" style={{width: '450px'}} className="p-4 mt-1 mx-auto rounded bg-light">
            <h2 className="mx-2 p-2">Login</h2>
                <p className="emptyError Error fw-semibold text-danger">{error}</p>
                <p className="fs-5 py-2 px-3">Welcome to Bettershoe Login to continue !</p>
                <div className="my-1 py-2 px-3">
                    <label>Email</label>
                    <input onChange={(e)=>handleInput(e.target)} type="email" name="email" className="email form-control px-3 col-12 att" />
                </div>
                
                <div style={{position: 'relative'}} className="my-1 py-2 px-3">
                    <label>Password</label>
                    <input onChange={(e)=>handleInput(e.target)} type="password" name="password" className="password att form-control ps-3 pe-5 col-12" />
                    {/* <i onclick="changevisiblity(this)" className="show-pass px-3 fa-solid fa-eye-slash"></i> */}
                </div>
    
                <div className="btnParent d-flex justify-content-end my-1 py-2 px-3">
                    <button style={{padding: '14px 0'}} type="submit" name="login" className="btn col-12 btn-dark rounded-1">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Login;