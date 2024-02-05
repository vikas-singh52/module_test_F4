
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from "../redux/actions/apiAction";
import pic from "../icons/Screenshot (16).png"
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import Item from "./item";

const Home = () => {

    let {data} = useSelector(state=>state)
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    console.log(data)
    
    useEffect(()=>{
        dispatch(postAPI())
    },[])

    function passData(user){
        console.log(user);
        let {id,title,body} = user;
        console.log(`Home data ${id}${title}${body}`);
        Navigate(`/item/${id}`);

    }
    return(
        <div className="cards-group">
            <h2>Social Media For Travellers</h2>
            <div className="row">
            {
                data.map(
                    (d)=>(
                        <div key={d.id} className="col inner-cards"
                         onClick={()=>passData(d)} >
                            <div className="my-card">
                                <img src={pic} width="300" height="300" alt="picture"/>
                                <h6>{d.title.slice(0,20)}</h6>
                                <p>
                                    {d.body.slice(0,50)}
                                </p> 
                            </div> 
                        </div>
                )
                )
            }
            </div>
        </div>
    )
}

export default Home
