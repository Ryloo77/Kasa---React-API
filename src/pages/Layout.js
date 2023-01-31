import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Outlet } from "react-router-dom";

function Layout () {
     return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        
     )
}

export default Layout