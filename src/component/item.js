import React from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import postImg from '../icons/Screenshot (16).png'
import '../styles/item.css'
import { useSelector } from "react-redux";

const Item = () => {
    // console.log(props.userData)
    // console.log(props.user)
    const para = useParams();
    let {data} = useSelector(state=>state)
    let title = data[para.userId].title
    let body = data[para.userId].body
    let navigate = useNavigate()

    return(
        <div className="item-page">
            <p><b>Post Number {para.userId}</b></p>
            <div className="detail-page">
                <img src={postImg} width="500" height="500" alt="picture"/>
                <div>
                    {/* <button onClick={()=>navigate("detail")}>Detail</button> */}
                    <NavLink to="detail">Detail</NavLink>
                    <NavLink to="userInfo">User Info</NavLink>
                    <Outlet/>
                </div>
            </div>       
        </div>
    )
}

export default Item