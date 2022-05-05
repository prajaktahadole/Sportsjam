import { Routes, Route } from "react-router-dom";
import { Accessories } from "../components/Products/Accessories";
import { Brands } from "../components/Products/Brands";
import { Clothing } from "../components/Products/Clothing";
import { Fangear } from "../components/Products/Fangear";
import { Fitness } from "../components/Products/Fitness";
import { LeisureSports } from "../components/Products/LeisureSports";
import { Shoes } from "../components/Products/Shoes";
import { Login } from "../components/Registration/Login";
import { Signup } from "../components/Registration/SignUp";
import { Wishlist } from "../components/WishListHandler/WishListHandler";
import { NavBar } from "../components/NavBarHandler/NavBarHandler";
import { Sports } from "../components/Products/Sports";
import { Landing } from "../components/LandingHandler/LandingHandler";

export const Routing = () => {
  return (
    <>
    <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
        <Route
          path="/Accessories"
          element={<Accessories></Accessories>}
        ></Route>
        <Route path="/Brands" element={<Brands></Brands>}></Route>
        <Route path="/Clothing" element={<Clothing></Clothing>}></Route>
        <Route path="/Fangear" element={<Fangear></Fangear>}></Route>
        <Route path="/Fitness" element={<Fitness></Fitness>}></Route>
        <Route
          path="/LeisureSports"
          element={<LeisureSports></LeisureSports>}
        ></Route>
        <Route path="/Shoes" element={<Shoes></Shoes>}></Route>
        <Route path="/Sports" element={<Sports></Sports>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
      </Routes>
    </>
  );
};
