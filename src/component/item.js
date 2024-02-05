import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom"
import '../styles/item.css'
import Home2 from "./home2";

const Item = () => {
    // console.log(props.userData)
    // console.log(props.user)
    const para = useParams();

    return(
        <div className="item-page">
            <h3 className="commonStyle">Post Number {para.userId}</h3>
            <div className="detail-page">
                <img src={`https://picsum.photos/200?${para.userId}`} width="300" height="300" alt="pic"/>
                <div>
                    {/* <button onClick={()=>navigate("detail")}>Detail</button> */}
                    <NavLink to="detail">Detail</NavLink>
                    <NavLink to="userInfo">User Info</NavLink>
                    <div className="outlet">
                        <Outlet/>
                    </div>
                </div>
            </div> 
            <div>
                <h3 className="commonStyle">More Post</h3>
                <Home2/>
            </div>      
        </div>
    )
}

export default Item