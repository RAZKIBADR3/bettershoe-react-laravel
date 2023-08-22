import axios from "axios";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddComment = ({id, updateComments, setComments}) => {
    const user = useSelector(store => store.user);
    const isAuthenticated = useSelector(store => store.isAuthenticated);
    const navigate = useNavigate();
    const text = useRef('');

    const handleText = (event) => {
        text.current = event.target.value
    }

    const handleKeyDown = (event) => {
        if(isAuthenticated){
            if (event.keyCode === 13 && text.current !== '') {
                const data = {
                    text: text.current,
                    shoe_id: id,
                    user_id: user.id
                }
                axios.post('http://localhost:8000/api/comments/store', data)
                .then(res => {
                    if(res.data.success){
                        event.target.value = '';
                        setComments(null);
                        updateComments();
                    }
                })
                .catch(err => console.log(err.message) )
            }
        }else{
            navigate('/users/login');
        }
    }

    return(
        <div className='addCommentP'>
            <input onChange={(event)=>handleText(event)} onKeyDown={(event)=>handleKeyDown(event)} type="text" className="search form-control" placeholder="Add A Comment" />
        </div>
    )
}

export default AddComment;