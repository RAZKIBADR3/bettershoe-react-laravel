import React from "react";

const Spinner = () => {
    return(
        <div style={{height: '15vh'}} className="my-4 p-5 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;