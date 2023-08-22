import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../partials/Spinner";
import ShowShoeCard from "./ShowShoeCard";
import Comments from "../Comments/Comments";

const ShowShoe = () => {
    const [shoe, setShoe] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        // shoe
        axios.get(`http://localhost:8000/api/shoes/show/${id}`)
        .then(res => setShoe(res.data))
        .catch(err => console.error(err))
    }, [id])

    return(
        <div className="content flex-column align-items-center">
            {shoe==null
                ?   <Spinner />
                :   <>
                    <ShowShoeCard shoe={shoe}/>
                    <Comments id={shoe.id}/>
                </>
            }
        </div>
    )
}

export default ShowShoe;