
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Item from "./component/item";
import Detail from "./component/detail";
import UserInfo from "./component/userInfo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/item/:userId" element={<Item/>}>
          <Route path="detail" element={<Detail/>}></Route>
          <Route path="userInfo" element={<UserInfo/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
