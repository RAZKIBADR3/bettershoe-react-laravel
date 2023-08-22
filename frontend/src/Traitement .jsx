import React, { useEffect }  from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Traitement = () => {
    const dispatch = useDispatch();
    const shoesCart = useSelector(store => store.shoesCart);
    // const isAuthenticated = useSelector(store => store.isAuthenticated);
    // const user = useSelector(store => store.user);

    useEffect(()=>{
        document.cookie = `cookie_name=cookie_value; SameSite=None; Secure`;

        const token = Cookies.get('token');
        dispatch( {type:'setIsAuthenticated', payload:{case: !!token}} )
        // console.log(!!token);

        // shoes
        axios.get('http://localhost:8000/api/shoes')
        .then(res => dispatch({type:'setShoes', payload:{shoes:res.data}}) )
        .catch(err => console.error(err))
        
        //brands
        axios.get('http://localhost:8000/api/brands')
        .then(res => dispatch({type:'setBrands', payload:{brands:res.data}}) )
        .catch(err => console.error(err))

        // shoesCart from localStorage
        const T = window.localStorage.shoes;
        if(T) dispatch( {type:'setShoesCart', payload:{data: JSON.parse(T)}} );
        else dispatch( {type:'setShoesCart', payload:{data: []}} );
    }, [])

    useEffect(()=>{
        const newT = JSON.stringify(shoesCart);
        window.localStorage.shoes = newT;
    }, [shoesCart])

    useEffect(()=>{
        // user
        const user = window.localStorage.user;
        if(user) dispatch( {type:'setUser', payload:{user: JSON.parse(user)}} );
        else dispatch( {type:'setUser', payload:{user}} );
    }, [])

    useEffect(()=>{
        // savesShoes
        const user = window.localStorage.user;
        if(user){
            axios.get(`http://localhost:8000/api/savedShoes/${JSON.parse(user).id}`)
            .then(res => dispatch({type:'setSavedShoes', payload:{data:res.data}}))
            .catch(err => console.error(err))
        }
    }, [])
}

export default Traitement;