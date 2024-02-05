import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Detail = () => {

    const para = useParams();
    let {data} = useSelector(state=>state)
    let title = data[(para.userId)-1].title
    let body = data[(para.userId)-1].body
    return(
        <div>
            <p>{body}</p>
        </div>
    )
}

export default Detail