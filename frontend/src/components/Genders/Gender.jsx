import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Leftside from "../../partials/LeftSide";
import Spinner from "../../partials/Spinner";
import ItemCard from "../shoes/itemCard";
import axios from "axios";

const Gender = () => {
    const [data, setData] = useState(null);
    const {title} = useParams();

    useEffect(()=>{
        // shoes
        axios.get(`http://localhost:8000/api/genders/${title}`)
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

export default Gender;