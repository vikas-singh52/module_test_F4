
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Item from "./component/item";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/item" element={<Item/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
