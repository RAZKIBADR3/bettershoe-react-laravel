import React from "react";
import {legacy_createStore} from "redux";

const init_State = {
    isAuthenticated : false,
    brands : null,
    shoes : null,
    shoesCart : [],
    total : 0,
    user : null,
    savedShoes : []
}

const reducer = (state = init_State, action) => {
    switch (action.type) {
        case 'setIsAuthenticated' :
            return {...state, isAuthenticated : action.payload.case}

        case 'logout' :
            return {...state, isAuthenticated :false , user :null, savedShoes :[]}

        case 'setSavedShoes' :
            return {...state, savedShoes : action.payload.data}

        case 'setUser' :
            return {...state, user : action.payload.user}

        case 'setBrands' :
            return {...state, brands : action.payload.brands};

        case 'setShoes' :
            return {...state, shoes : action.payload.shoes};

        case 'setShoesCart' :
            return {...state, shoesCart : action.payload.data};

        case 'setTotal' :
            let total = 0;
            state.shoesCart.forEach(shoe => total += shoe.total )
            return {...state, total : total};
            
        case 'addShoeToCart' :
            const shoe1 = action.payload.shoe;
            const exists = state.shoesCart.some((e) => e.id === shoe1.id);
            if(!exists){
                shoe1.quantity = 1;
                shoe1.total = shoe1.price;
                alert('Shoe successfully added ✅');
                return {...state, shoesCart : [...state.shoesCart, shoe1] }
            }else{
                alert('Shoe already exists !!');
                return state
            }

        case 'deleteShoeFromCart' :
            const T = state.shoesCart.filter( e => e.id !== action.payload.id);
            return {...state, shoesCart : T};

        case 'increment' :
            const T2 = state.shoesCart;
            const shoe2 = action.payload.shoe;
            T2.forEach( e => {
                if(e.id === shoe2.id && shoe2.quantity < 10){
                    e.quantity++;
                    e.total = e.price * e.quantity
                }
            });
            return {...state, shoesCart : [...T2] };
            
        case 'decrement' :
            const T3 = state.shoesCart;
            const shoe3 = action.payload.shoe;
            T3.forEach( e => {
                if(e.id === shoe3.id && shoe3.quantity > 1){
                    e.quantity--;
                    e.total = e.price * e.quantity
                }
            });
            return {...state, shoesCart : [...T3] };

        default :
            return state;
    }
}

const store = legacy_createStore(reducer);
export default store;