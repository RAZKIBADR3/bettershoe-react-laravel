import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import Spinner from "../../partials/Spinner";
import axios from "axios";

const Comments = ({id}) => {
    const [comments, setComments] = useState(null);

    const updateComments = () => {
        axios.get(`http://localhost:8000/api/comments/${id}`)
        .then(res => setComments(res.data) )
        .catch(err => console.log(err.message) );
    }

    useEffect(()=>{
        // comments
        updateComments();
    }, [])

    return(
        <div className="commentsP">
            <p>Comments : </p>
            <AddComment id={id} setComments={setComments} updateComments={updateComments}/>
            <div className="comments">
                {comments === null 
                    ?   <Spinner />
                    :   comments.map(c=>
                        <div key={c.id} className="comment">
                            <img src={`/users_img/${c.user.profile.profilePic != null ? c.user.profile.profilePic : 'no-img.jpg'}`} alt="" />
                            <div>
                                <p className="username">{c.user.name}</p>
                                <p className="text">{c.text}</p>
                            </div>
                            <span></span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Comments;