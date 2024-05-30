import { Outlet } from "react-router-dom"
import Nav from "./Shared/Nav"
import Footer from "./Shared/Footer"
import { ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { contextData } from "./Shared/Provider";


function App() {

  const {darkmode} = useContext(contextData);


  return (
    <div className={`dark:bg-[#030A1A] ${darkmode && 'dark'}`}>
      <Nav/>
      <Outlet/>
      <ToastContainer />
      <Footer/>
      <ScrollRestoration/>
    </div>
  )
}

export default App
