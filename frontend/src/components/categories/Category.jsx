import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Leftside from "../../partials/LeftSide";
import Spinner from "../../partials/Spinner";
import ItemCard from "../shoes/itemCard";

const Category = () => {
    const [data, setData] = useState(null);
    const {title} = useParams();

    useEffect(()=>{
        // shoes
        axios.get(`http://localhost:8000/api/categories/${title}`)
        .then(res => setData(res.data))
        .catch(err => console.error(err))
    }, [title]);

    return(
        <div className="content">
            <Leftside />
            <div className="rightSide">
                {data==null
                    ?   <Spinner />
                    :   <div className="items">
                            {data.map(shoe =>
                                <ItemCard shoe={shoe} key={shoe.id} />
                            )}
                    </div>
                }
            </div>
        </div>
    )
}

export default Category;