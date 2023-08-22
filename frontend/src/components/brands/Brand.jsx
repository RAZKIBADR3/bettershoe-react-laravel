import React, { useEffect, useState } from "react";
import ShoeBg from "../shoes/ShoeBg";
import LeftSide from "../../partials/LeftSide";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../partials/Spinner";
import ItemCard from "../shoes/itemCard";

const Brand = () => {
    const [data, setData] = useState(null);
    const {title} = useParams();

    useEffect(()=>{
        // shoes
        axios.get(`http://localhost:8000/api/brands/${title}`)
        .then(res => setData(res.data))
        .catch(err => console.error(err))
    }, [title]);

    return(
        <div className="content">
            <LeftSide />
            <div className="rightSide">
                <ShoeBg bg={`/bg/${title}.jpg`}/>
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

export default Brand;