import React from "react";

const ShoeBg = ({bg}) => {
    return(
        <div className="shoeBg" style={{backgroundImage: `url(${bg})`}}>
        </div>
    )
}

export default ShoeBg;