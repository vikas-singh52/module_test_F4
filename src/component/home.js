import React, { useState } from "react";
// import pic from "../icons/Screenshot (16).png"
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.css";
import Home2 from "./home2";
import Search from "./search";

const Home = () => {
  let [input, setInput] = useState("");
  let [searchString, setSearchString] = useState("");

  function submitData(e) {
    e.preventDefault();
    setSearchString(input);
  }

  return (
    <div className="cards-group">
      <h3 className="commonStyle">Social Media For Travellers</h3>
      <form onSubmit={submitData}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search here"
        />
      </form>
      {
        searchString.length>0 ? <Search search={searchString}/>:<Home2/>
      }
      
      
    </div>
  )
}

export default Home;
