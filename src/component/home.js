
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from "../redux/actions/apiAction";
import pic from "../icons/Screenshot (16).png"
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";

const Home = () => {

    let {data} = useSelector(state=>state)
    let dispatch = useDispatch()
    let Navigate = useNavigate();

    useEffect(()=>{
        dispatch(postAPI())
    },[])

    return(
        <div className="cards-group">
            <h2>Social Media For Travellers</h2>
            <div className="row">
            {
                data.map(
                    (d)=>(
                        <div key={d.id} className="col inner-cards"
                         onClick={()=>Navigate(`/item/${d.id}`)}>
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
