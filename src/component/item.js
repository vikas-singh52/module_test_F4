import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import postImg from '../icons/Screenshot (16).png'
import '../styles/item.css'

const Item = () => {
    let para = useParams()
    let navigate = useNavigate()
    return(
        <div >
            <p>Post Number {para.userId}</p>
            <div className="detail-page">
                <img src={postImg} width="500" height="500" alt="picture"/>
                <div>
                    <button onClick={()=>navigate("detail")}>Detail</button>
                    <button onClick={()=>navigate("userInfo")}>User Info</button>
                    <Outlet/>
                </div>
            </div>       
        </div>
    )
}

export default Item