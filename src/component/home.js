
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from "../redux/actions/apiAction";
import pic from "../icons/Screenshot (16).png"
const Home = () => {

    let {data} = useSelector(state=>state)
    let dispatch = useDispatch()
    console.log(data)

    useEffect(()=>{
        dispatch(postAPI())
    },[])

    return(
        <div >
            <h1>Social Media For Travellers</h1>
            {
                data.map(
                    (d)=>(
                        <div key={d.id}>
                            <div>
                                <img src={pic} width="300" height="300" alt="picture"/>
                                <h3>{d.title}</h3>  
                                <p>{d.body}</p> 
                            </div>
                            
                           
                        </div>
                )
                )
            }
        </div>
    )
}

export default Home
