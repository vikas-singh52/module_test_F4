import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAPI } from "../redux/actions/apiAction";
// import pic from "../icons/Screenshot (16).png"
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const Home2 = () => {

  let { data } = useSelector((state) => state);
  let dispatch = useDispatch();
  let Navigate = useNavigate();

  useEffect(() => {
    dispatch(postAPI());
  }, []);

  function passData(user) {
    Navigate(`/item/${user.id}`);
  }
  return (
    <div className="row">
      {
        // search.length>0 ? data.filter(
        //     (singleData)=>{
        //         singleData.body.includes(search) &&
        //         <div key={singleData.id} className="col inner-cards"
        //          onClick={()=>passData(singleData)}>

        //             <div className="my-card">
        //                 <img src = {`https://picsum.photos/200?${singleData.id}`} width="300" height="300" alt="picture"/>
        //                 <h6>{singleData.title.slice(0,20)}</h6>
        //                 <p>
        //                     {singleData.body.slice(0,50)}
        //                 </p>
        //             </div>
        //         </div>
        //     })
        // search.length > 0 ? data.filter((singleData) => singleData.body.includes(search))
        //       .map((filteredData) => (
        //         <div
        //           key={filteredData.id}
        //           className="col inner-cards"
        //           onClick={() => passData(filteredData)}
        //         >
        //           <div className="my-card">
        //             <img
        //               src={`https://picsum.photos/200?${filteredData.id}`}
        //               width="300"
        //               height="300"
        //               alt="picture"
        //             />
        //             <h6>{filteredData.title.slice(0, 20)}</h6>
        //             <p>{filteredData.body.slice(0, 50)}</p>
        //           </div>
        //         </div>
        //       ))
        //   : 
        data.map((d) => (
              <div
                key={d.id}
                className="col inner-cards"
                onClick={() => passData(d)}
              >
                <div className="my-card">
                  <img
                    src={`https://picsum.photos/200?${d.id}`}
                    width="300"
                    height="300"
                    alt="picture"
                  />
                  <h6>{d.title.slice(0, 20)}</h6>
                  <p>{d.body.slice(0, 50)}</p>
                </div>
              </div>
            ))
      }
    </div>
  )
}

export default Home2;
