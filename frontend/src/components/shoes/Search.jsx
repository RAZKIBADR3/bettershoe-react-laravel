import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({displaySearch, setDisplaySearch}) => {
    const text = useRef('');
    const navigate = useNavigate();

    const handleText = (event) => {
        text.current = event.target.value
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setDisplaySearch(false);
            navigate(`/shoes/search/${text.current}`);
        }
    }

    return(
        <div className={displaySearch===false ? 'searchP' : 'searchP open'}>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input onChange={(event)=>handleText(event)} onKeyDown={(event)=>handleKeyDown(event)} type="text" className="search form-control" placeholder="Search ..." />
        </div>
    )
}

export default Search;