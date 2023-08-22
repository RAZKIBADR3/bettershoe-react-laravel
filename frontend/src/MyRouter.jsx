import React from "react";
import {BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Header from "./partials/Header";
import Home from "./components/interface/home";
import Footer from "./partials/Footer";
import Brand from "./components/brands/Brand";
import Gender from "./components/Genders/Gender";
import Category from "./components/categories/Category";
import Filter from "./components/shoes/Filter";
import ShowShoe from "./components/shoes/ShowShoe";
import Cart from "./components/Carts/Cart";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Dashboard from "./components/admins/Dashboard";
import DashboardUsers from "./components/admins/DashboardUsers";
import DashboardSheos from "./components/admins/DashboardSheos";
import SavedShoes from "./components/savedShoes/SavedShoes";
import Account from "./components/users/Account";
import Orders from "./components/users/Orders";
import AccountInfo from "./components/users/AccountInfo";

const MyRouter = () => {
    return (
        <MainRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/brands/:title" element={<Brand />}/>
                    <Route path="/genders/:title" element={<Gender />}/>
                    <Route path="/categories/:title" element={<Category />}/>
                    <Route path="/shoes/search/:text" element={<Filter />}/>

                    <Route path="/shoes/show/:id" element={<ShowShoe />}/>
                    <Route path="/cart" element={<Cart />}/>
                    
                    <Route path="/users/login" element={<Login />}/>
                    <Route path="/users/register" element={<Register />}/>
                    <Route path="/admins/dashboard" element={<Dashboard />}/>
                    <Route path="/admins/dashboard/users" element={<DashboardUsers />}/>
                    <Route path="/admins/dashboard/shoes" element={<DashboardSheos />}/>

                    <Route path="/savedShoes" element={<SavedShoes />}/>

                    <Route path="/users/account" element={<Account />}/>
                    <Route path="/users/account/carts" element={<Orders />}/>
                    <Route path="/users/account/info" element={<AccountInfo />}/>

                </Routes>
            <Footer />
        </MainRouter>
    )
}

export default MyRouter;