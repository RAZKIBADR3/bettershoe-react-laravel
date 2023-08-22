import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCard from "./itemCard";

const ItemsCard = ({shoes, brand = null, state}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        // console.log(brand);
        if(brand!=null){
            setData( shoes.filter(shoe=>shoe.brand.title === brand) );
        }
    }, []);

    const homeItems = <>
            {data.map((shoe,i) => i<3
                    && <ItemCard shoe={shoe} key={shoe.id} />
                )}
            <div className="btnParent">
                <NavLink className="btn" to={`/brands/${brand}`}>More ...</NavLink>
            </div>
    </>

    const allItems = <>
        {data.map(shoe =>
            <ItemCard shoe={shoe} key={shoe.id} />
        )}
    </>

    return(
        <div className="items">
            {state==='home' 
                ?   homeItems
                :   allItems
            }
        </div>
    )
}

export default ItemsCard;