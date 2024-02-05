
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from "../redux/actions/apiAction";
// import pic from "../icons/Screenshot (16).png"
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home2 from "./home2";
const Home = () => {

    return(
        <div className="cards-group">
            <h3 className="commonStyle">Social Media For Travellers</h3>
            <input className="search-input" type="text" placeholder="Search here"/>
            <Home2/>
        </div>
    )
}

export default Home
