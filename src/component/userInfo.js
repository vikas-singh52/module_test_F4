
import React from "react";
import { useParams } from "react-router-dom";
const UserInfo = () => {

    const para = useParams(); 
    return(
        <div >
              <h5>Post was posted by {para.userId}</h5>
        </div>
    )
}

export default UserInfo